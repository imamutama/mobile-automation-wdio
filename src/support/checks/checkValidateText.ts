/**
 * @param {String}  text this value string data
 */

export default async (text: string) => {
	/**
	 * @type {boolean} Selector verify true data
	 */
	const selector = await $(
		"//*[contains(@text,'" + text + "')]",
	).waitForDisplayed({
		timeout: 5000,
	});
	try {
		expect(selector).toEqual(true);
	} catch {
		throw new Error(`Expected element "${selector}" not to be displayed`);
	}
};
