import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {

  public nombre: string = "";
  public alumnos: number;
  public inicioSesion: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router) {

    this.nombre = "";
    this.alumnos = 0;
    this.inicioSesion = false;
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params);
      this.nombre = params['nombre'];
      this.alumnos = +params['alumnos'];

      if (this.nombre == 'ninguno') {
        this._router.navigate(['/zapatillas']);
      }
    });
  }

  redirigir() {
    this._router.navigate(['/zapatillas']);
  }

  iniciarSesion() {
    this.inicioSesion = true;
  }
}
