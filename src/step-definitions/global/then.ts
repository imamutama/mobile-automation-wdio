import { Then } from '@wdio/cucumber-framework';
import waitForDisplayed from '../../support/checks/waitForDisplayed';
import checkValidateText from '../../support/checks/checkValidateText';

Then('I verify text value {string} on page', checkValidateText);
