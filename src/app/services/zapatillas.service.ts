import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService {
	public zapatillas: Array<Zapatilla>;

	constructor() {
		this.zapatillas = [
			new Zapatilla('Reebok classic', 80, 'Blanco', 'Reebok', true),
			new Zapatilla('Nike Runner', 60, 'Negro', 'Nike', true),
			new Zapatilla('Adidas Yezzy', 90, 'Gris', 'Adidas', false)];
	}

	getZapatillas(){
		return this.zapatillas;
	}
}