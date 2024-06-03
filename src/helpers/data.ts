class Data {
	public _page!: string;
	public _priceTotalCart!: number;
	public _subTotalCart!: number;

	public set cartSubTotal(subTotalCart: number) {
		this._subTotalCart = subTotalCart;
	}

	public get cartSubTotal() {
		return this._subTotalCart;
	}

	public set totalPriceCart(priceTotalCart: number) {
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
