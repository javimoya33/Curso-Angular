import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
	selector: 'zapatillas',
	templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit {
	public titulo: string = "Componentes de zapatillas";
	public zapatillas: Array<Zapatilla>;
	public marcas: String[];
	public color: string;

	constructor() {
		this.color = "gray";
		this.marcas = new Array();
		this.zapatillas = [
			new Zapatilla('Reebok classic', 80, 'Blanco', 'Reebok', true),
			new Zapatilla('Nike Runner', 60, 'Negro', 'Nike', true),
			new Zapatilla('Adidas Yezzy', 90, 'Gris', 'Adidas', false)];
	}

	ngOnInit(){
		console.log(this.zapatillas);
	}

	getMarcas() {
		this.zapatillas.forEach((zapatilla, index) => {

			if (this.marcas.indexOf(zapatilla.marca) < 0) {
				this.marcas.push(zapatilla.marca);
			}
		});
	}
}