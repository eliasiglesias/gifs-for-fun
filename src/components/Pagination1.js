import React from "react";
import { Row } from "reactstrap";
import { NavegateButtons } from "./NavegateButtons";
import { Title } from "./Title";
import { Select } from "./Select";
import { TotalResults } from "./TotalResults";

const Pagination1 = (props) => {
	return (
		<>
			<Row className="my-3 d-flex justify-content-around">
				<NavegateButtons
					offset={props.offset}
					limit={props.limit}
					totalResults={props.totalResults}
					handleClick={props.handleClick}
				/>
				<Title numPage={props.numPage} maxPages={props.maxPages} />
				<Select handleChange={props.handleChange} />
			</Row>
			<Row className="d-flex justify-content-center">
				<TotalResults limit={props.limit} totalResults={props.totalResults} />
			</Row>
		</>
	);
};

export { Pagination1 };
