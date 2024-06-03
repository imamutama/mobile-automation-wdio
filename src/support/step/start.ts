import { pages } from '../../pages/pages';
import waitForDisplayed from '../checks/waitForDisplayed';

export default async () => {
	const page = pages['splash'];
	await waitForDisplayed('native', page['btnNext'], 3);
};
