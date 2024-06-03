import { promises as fs } from 'fs';

export const readFileJson = async (file: string): Promise<JSON> => {
	const data = await fs.readFile(file, 'utf8');
	const jsonObject = JSON.parse(data);
	return jsonObject;
};

export const getNumberFromRp = async (text: string) => {
	if (text.includes('.')) {
		let value: number = +text
			.substring(text.indexOf('p') + 1)
			.replace(/\./g, '');
		return value;
	} else if (text.includes(',')) {
		let value: number = +text
			.substring(text.indexOf('p') + 1)
			.replace(/,/g, '');
		return value;
	}
};
