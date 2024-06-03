import data from '../../helpers/data';
import { pages } from '../../pages/pages';
import waitForDisplayed from '../checks/waitForDisplayed';

/**
 * Perform an click action on the given element
 * @param  {any}  selector Element selector
 */
export default async (selector: any) => {
	/**
	 * Page field define key selector in pages
	 * @type {Object}
	 */
	const page = pages[data.currentPage];

	await waitForDisplayed('native', page[selector], 3);
	var text = await $(page[selector]).getText();
	return text;
};
