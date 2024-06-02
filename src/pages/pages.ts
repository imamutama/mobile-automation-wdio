import { cartPage } from './cart-page';
import { homePage } from './home-page';
import { loginPage } from './login-page';
import { paymentPage } from './payment-page';
import { productPage } from './product-page';
import { searchPage } from './search-page';
import { splashPage } from './splash-page';

export const pages: { [key: string]: any } = {
	cart: cartPage,
	home: homePage,
	login: loginPage,
	payment: paymentPage,
	product: productPage,
	search: searchPage,
	splash: splashPage,
};
