import React from "react";

const Title = (props) => {
	return (
		<h4 className="mt-3">
			Página {props.numPage} de {props.maxPages}
		</h4>
	);
};

export { Title };
