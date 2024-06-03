import { Then } from '@wdio/cucumber-framework';
import cart from '../support/step/cart';

Then('verify sub total and shipping fee with the total price', cart);
