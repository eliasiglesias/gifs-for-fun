import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import { getApi } from "../api/getApi";
import { Pagination1 } from "./Pagination1";

const GifAreaF = (props) => {
	const [gifUrls, setGifUrls] = useState();
	const [errorUrls, setErrorUrls] = useState();
	const [limit, setLimit] = useState(20);
	const [offset, setOffset] = useState(0);
	const [numPage, setNumPage] = useState(1);
	const [maxPages, setMaxPages] = useState(0);
	const [totalResults, setTotalResults] = useState(0);

	//Ruta: data<[index]<images<original<url

	const handleClick = (changeNum) => {
		setOffset(offset + changeNum);

		if (offset + changeNum < 1) {
			setNumPage(1);
		} else if (changeNum === totalResults - limit) {
			setNumPage(maxPages);
		} else changeNum > 0 ? setNumPage(numPage + 1) : setNumPage(numPage - 1);
	};

	const handleChange = (event) => {
		const limitPage = parseInt(event.target.value);
		setLimit(limitPage);
		setOffset(0);
		setNumPage(1);
	};

	useEffect(() => {
		setOffset(0);
		setNumPage(1);
	}, [props.search]);

	useEffect(() => {
		async function fetchData() {
			const data = await getApi(props.search, limit, offset);
			if (data.error === "") {
				setGifUrls(data.arrayUrls);
				setErrorUrls();
				setMaxPages(data.maxPages);
				setTotalResults(data.totalResults);
			} else {
				setErrorUrls(data.error);
			}
		}
		fetchData();
	}, [props.search, offset, limit]);

	return (
		<div>
			<Container>
				<Row className="mt-3">
					{gifUrls && !errorUrls ? (
						gifUrls.map((value) => {
							return (
								<Col xs="3">
									<span>
										<img className="img-fluid p-1" src={value} alt="gif" />
									</span>
								</Col>
							);
						})
					) : errorUrls ? (
						<p>Hay un error</p>
					) : (
						<span>
							<p>Estamos trabajando en ello</p>
							<Spinner color="danger" />
						</span>
					)}
				</Row>
				{!errorUrls && (
					<Pagination1
						offset={offset}
						limit={limit}
						numPage={numPage}
						handleClick={handleClick}
						handleChange={handleChange}
						totalResults={totalResults}
						maxPages={maxPages}
					/>
				)}
			</Container>
		</div>
	);
};

export default GifAreaF;
