import { Then } from '@wdio/cucumber-framework';
import waitForDisplayed from '../../support/checks/waitForDisplayed';

Then(
	'I verify text value {string} is passed on applicatiion',
	waitForDisplayed,
);
