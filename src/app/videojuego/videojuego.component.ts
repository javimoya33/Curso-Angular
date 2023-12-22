import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
	selector: 'videojuego',
	templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck {

	public titulo: string;
	public listado: string;

	constructor() {

		this.titulo = "Titulo de videojuegos";
		this.listado = "Listado de videojuegos";
	}

	ngOnInit() {
		console.log("OnInit ejecutado!");
	}

	ngDoCheck() {
		console.log('DoCheck ejecutado!');
	}

	cambiarTitulo() {
		this.titulo = "Titulo de juegos";
	}
}