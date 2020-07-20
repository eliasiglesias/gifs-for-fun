import React from "react";

const TotalResults = (props) => {
	return (
		<h4 className="text-secondary">
			Mostrando {props.limit} resultados de {props.totalResults}
		</h4>
	);
};

export { TotalResults };
