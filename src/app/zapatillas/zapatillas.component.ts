import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatillas.service';

@Component({
	selector: 'zapatillas',
	templateUrl: './zapatillas.component.html',
	providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit {
	public titulo: string = "Componentes de zapatillas";
	public zapatillas: Array<Zapatilla> = [];
	public marcas: String[];
	public color: string;
	public nueva_marca: string;

	constructor(private _zapatillaService: ZapatillaService) {
		this.nueva_marca = "Fila";
		this.color = "gray";
		this.marcas = new Array();
	}

	ngOnInit(){
		this.zapatillas = this._zapatillaService.getZapatillas();

		this.getMarcas();
	}

	getMarcas() {
		this.zapatillas.forEach((zapatilla, index) => {

			if (this.marcas.indexOf(zapatilla.marca) < 0) {
				this.marcas.push(zapatilla.marca);
			}
		});
	}

	addMarca() {
		this.marcas.push(this.nueva_marca);
		this.nueva_marca = "";
	}

	deleteMarca(index: number) {
		this.marcas.splice(index, 1);
	}
}