import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
	selector: 'zapatillas',
	templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit {
	public titulo: string = "Componentes de zapatillas";
	public zapatillas: Array<Zapatilla>;

	constructor() {
		this.zapatillas = [
			new Zapatilla('Reebok classic', 80, 'Blanco', 'Reebok', true),
			new Zapatilla('Nike Runner', 60, 'Negro', 'Nike', true),
			new Zapatilla('Adidas Yezzy', 90, 'Gris', 'Adidas', false)];
	}

	ngOnInit(){
		console.log(this.zapatillas);
	}
}