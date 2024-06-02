import { promises as fs } from 'fs';

export const readFileJson = async (file: string): Promise<JSON> => {
	const data = await fs.readFile(file, 'utf8');
	const jsonObject = JSON.parse(data);
	return jsonObject;
};
