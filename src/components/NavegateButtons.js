import React from "react";
import { Button } from "reactstrap";

const NavegateButtons = (props) => {
	const lastPage = props.totalResults - props.limit;
	console.log(lastPage);
	return (
		<div className="mt-3">
			<Button className="mr-1" onClick={() => props.handleClick(-props.offset)}>
				{"<|"}
			</Button>
			<Button
				className="mr-2"
				color="dark"
				onClick={() => props.handleClick(-props.limit)}
			>
				{" "}
				{"<"}{" "}
			</Button>
			<Button color="dark" onClick={() => props.handleClick(props.limit)}>
				{" "}
				{">"}{" "}
			</Button>
			<Button className="ml-1" onClick={() => props.handleClick(lastPage)}>
				{"|>"}
			</Button>
		</div>
	);
};

export { NavegateButtons };
