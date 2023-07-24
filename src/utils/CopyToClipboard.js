export default function copyToClipboard(value) {
    navigator.clipboard.writeText(value);
    
	return {
		status: "success",
	};
}
