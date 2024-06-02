import data from '../../helpers/data';
import { pages } from '../../pages/pages';
import waitForDisplayed from '../checks/waitForDisplayed';

/**
 * Perform an click action on the given element
 * @param  {String}   value    input the value with type string
 * @param  {String}   selector Element selector
 */
export default async (value: string, selector: any) => {
	/**
	 * Page field define key selector in pages
	 * @type {Object}
	 */
	const page = pages[data.currentPage];

	if (selector in page) {
		await waitForDisplayed('native', page[selector], 3);
		await $(page[selector]).setValue(value);
	} else {
		throw new Error(
			`locator '${selector}' is not defined in page '${data.currentPage}'!`,
		);
	}
};
