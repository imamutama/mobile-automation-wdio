import { getNumberFromRp } from '../../helpers/generated-help';
import getTextField from '../actions/getTextField';
import { checkValues } from '../checks/checkValues';

export default async () => {
	/**
	 * @type {Object} get sub total shipping fee and total price
	 */
	const valuePrice = [
		await getNumberFromRp(await getTextField('subGross')),
		await getNumberFromRp(await getTextField('shippingFee')),
		await getNumberFromRp(await getTextField('totalFee')),
	];
	console.log(
		'Price Product : ' + valuePrice[0],
		valuePrice[1],
		valuePrice[2],
	);

	/**
	 * Verify total price after sum subtotal and shipping fee
	 */
	const totalSubShipping = Number(valuePrice[0]) + Number(valuePrice[1]);
	await checkValues(Number(valuePrice[2]), totalSubShipping);
};
