export function snakeCaseToTitleCase(input: string): string {
	return input
		.split("_")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}

export function renderAnyToString(value: any) {
	if (typeof value === "boolean") {
		return value.toString(); // Convert boolean to string representation
	} else if (typeof value === "object" && value !== null) {
		return JSON.stringify(value); // Stringify object
	} else {
		return value; // Return original value
	}
}

export const transformToEllipsis = (text: string, maxLength: number) => {
	if (text.length <= maxLength) {
		return text;
	} else {
		return text.slice(0, maxLength - 3) + "...";
	}
};