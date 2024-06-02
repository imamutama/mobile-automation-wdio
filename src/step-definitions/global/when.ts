import { When } from '@wdio/cucumber-framework';
import clickElements from '../../support/actions/clickElements';
import setInputField from '../../support/actions/setInputField';
import data from '../../helpers/data';
import { login } from '../../support/step/login-step';
import { pages } from '../../pages/pages';
import pause from '../../support/actions/pause';

When(/^user is on "(.+)" page$/, async (pageName) => {
	if (pageName in pages) {
		data.currentPage = pageName;
		console.log('Current page: ' + data.currentPage);
	} else {
		throw new Error(`page '${pageName}' is not define in 'pages.ts' file!`);
	}
});

When('I success login on the application', async (table) => {
	await login(table);
});

When(/^I click on the (text|native) element "(.+)"$/, clickElements);

When(/^I set "(.+)" on the filed "(.+)"$/, setInputField);

When(/^I waiting loading for "(.+)" seconds$/, pause);
