const queryFetch = async (options) => {
	const {
		endPoint = null,
		slug = null,
		sortBy = null,
		sortOrder = null,
	} = options;

	// Example Shape of the options object coming in:
	// const options: {
	// 	endPoint: "news-articles";
	// 	sortBy: "date";
	// 	sortOrder: "DESC";
	// 	slug: "news-article-one"
	// }

	const url = `${import.meta.env.VITE_API_URL}${endPoint}?${
		slug ? `filters[slug][$eq]=${slug}&` : ""
	}${sortBy && sortOrder ? `sort=${sortBy}:${sortOrder}&` : ""}populate=*`;

	const response = await fetch(url);
	// console.log("queryFetch response:", response);

	if (!response.ok) {
		throw new Error("Failed to fetch the data...");
	}

	return response.json();
};

export default queryFetch;
