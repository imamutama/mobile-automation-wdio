/**
 * Wait for the given element to become visible
 * @param  {any}   valueExpected
 * @param  {any}   valueActual
 */
export async function checkValues(valueExpected: any, valueActual: any) {
	/**
	 * verify value equals
	 */
	try {
		expect(valueExpected).toEqual(valueActual);
	} catch {
		throw new Error(`${valueExpected} not equals with the ${valueActual}`);
	}
}
