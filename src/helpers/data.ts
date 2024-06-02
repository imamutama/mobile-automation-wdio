class Data {
	public _page!: string;
	public _priceTotalCart!: string;

	public set totalPriceCart(priceTotalCart: string) {
		this._priceTotalCart = priceTotalCart;
	}

	public get totalPriceCart() {
		return this._priceTotalCart;
	}

	public set currentPage(page: string) {
		this._page = page;
	}

	public get currentPage() {
		return this._page;
	}

	public clearData() {
		this._page = '';
	}
}

export default new Data();
