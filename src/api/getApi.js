import { baseUrl, apiKey } from "./constants";

const getApi = async (search, limit, offset) => {
	const data = {
		arrayUrls: null,
		maxPages: null,
		totalResults: null,
		error: "",
	};

	let url =
		baseUrl +
		"trending?api_key=" +
		apiKey +
		"&limit=" +
		limit +
		"&offset=" +
		offset;
	console.log(url);
	if (search !== "") {
		url =
			baseUrl +
			"search?api_key=" +
			apiKey +
			"&q=" +
			search +
			"&limit=" +
			limit +
			"&offset=" +
			offset;
	}
	const result = await fetch(url);
	console.log(result);
	const resultJson = await result.json();
	console.log(resultJson);

	if (result.status === 200) {
		if (resultJson.pagination) {
			const checkPage =
				resultJson.pagination.total_count > resultJson.pagination.offset;
			if (checkPage) {
				const arrayUrls = resultJson.data.map(
					(value) => value.images.preview_gif.url
				);
				data.maxPages = Math.ceil(resultJson.pagination.total_count / limit);
				data.arrayUrls = arrayUrls;
				data.totalResults = resultJson.pagination.total_count;
			} else data.error = "No hay tantos elementos";
		} else data.error = "No hay tantos elementos";
	} else if (result.status === 403) {
		data.error = "Error 403";
	} else if (result.status === 409) {
		data.error = "Error 409";
	}

	return data;
};

export { getApi };
