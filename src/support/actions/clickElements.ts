import data from '../../helpers/data';
import { pages } from '../../pages/pages';
import waitForDisplayed from '../checks/waitForDisplayed';

/**
 * Perform an click action on the given element
 * @param  {String}   type    Type of the element (text or selector)
 * @param  {String}   selector Element selector
 */
export default async (type: 'text' | 'native', selector: any) => {
	/**
	 * Page field define key selector in pages
	 * @type {Object}
	 */
	const page = pages[data.currentPage];
	/**
	 *
	 * This action for the click element native | text |
	 */
	try {
		switch (type) {
			case 'native':
				await waitForDisplayed('native', page[selector], 5);
				await $(page[selector]).click();
				break;
			case 'text':
				await waitForDisplayed('text', selector, 3);
				await $("//*[contains(@text,'" + selector + "')]").click();
				break;
		}
	} catch {
		throw new Error(
			`locator '${selector}' is not defined in page '${data.currentPage}'!`,
		);
	}
};
