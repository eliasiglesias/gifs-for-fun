import React from "react";

const Select = (props) => {
	return (
		<select onChange={props.handleChange}>
			<option value="8">8</option>
			<option value="16">16</option>
			<option value="20" selected>
				20
			</option>
			<option value="40">40</option>
		</select>
	);
};

export { Select };
