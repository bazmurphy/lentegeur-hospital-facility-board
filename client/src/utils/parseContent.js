import parse from "html-react-parser";

const parseContent = (contentString) => {
	// remove the <div> wrapping it
	const contentStringPrepared = contentString
		.replace(/^<div.*?>/, "")
		.replace(/<\/div>$/, "");
	// parse the string from html into react components
	return parse(contentStringPrepared);
};

export default parseContent;
