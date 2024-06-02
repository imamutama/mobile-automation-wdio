import data from '../../helpers/data';
import { pages } from '../../pages/pages';

/**
 * Perform an click action on the given element
 * @param  {String}   selector Element selector
 */
export default async (selector: any) => {
	/**
	 * Page field define key selector in pages
	 * @type {Object}
	 */
	const page = pages[data.currentPage];
	var text = (await $(selector)).getText();
	return text;
};
