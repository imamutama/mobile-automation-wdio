import clickElements from '../actions/clickElements';
import setInputField from '../actions/setInputField';

export async function login(table: any) {
	/**
	 * The row to define data table
	 * @type {any}
	 */
	const row = table.hashes();

	/**
	 * step for the login
	 */
	await clickElements('native', 'btnLogin');
	await setInputField(row[0].username, 'inputField');
	await clickElements('native', 'btnNextLogin');
	await setInputField(row[0].password, 'passwordField');
	await clickElements('native', 'btnNextLogin');
}
