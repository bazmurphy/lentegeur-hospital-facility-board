const convertToSnakeCase = (string) => {
	// Convert the string to lowercase
	const lowercaseString = string.toLowerCase();
	// Replace spaces with underscores
	const snakeCaseString = lowercaseString.replace(/\s+/g, "_");
	return snakeCaseString;
};

export default convertToSnakeCase;
