import { marked } from "marked";
import md from "$lib/README.md?raw";

export const load = async () => {
	const readMe = marked.parse(md);
	return { readMe };
};
