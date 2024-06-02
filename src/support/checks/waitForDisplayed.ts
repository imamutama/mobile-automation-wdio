/**
 * Wait for the given element to become visible
 * @param  {any}   selector      Element selector
 * @param {String} type  Type element
 *
 * @todo  merge with waitfor
 */
export default async (
	type: 'native' | 'text',
	selector: any,
	timeout: number,
) => {
	/**
	 * Element define selector native or flutter
	 * @type {any}
	 */
	const element =
		type === 'native'
			? await $(selector)
			: await $("//*[contains(@text,'" + selector + "')]");
	/**
	 * Maximum number of milliseconds to wait for
	 * @type {Int}
	 */
	const ms = timeout * 1000;

	if (type === 'native') {
		await driver.waitUntil(
			async function () {
				return await element.isDisplayed();
			},
			{
				timeout: timeout * 1000,
				timeoutMsg:
					'is element ' + selector + ' cannot found this selector',
			},
		);
	} else {
		await driver.waitUntil(
			async function () {
				return await element.isDisplayed();
			},
			{
				timeout: timeout * 1000,
				timeoutMsg:
					'is element ' + selector + ' cannot found this selector',
			},
		);
	}
};
