import { Component } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'externo',
  templateUrl: './externo.component.html',
  styleUrl: './externo.component.css',
  providers: [PeticionesService]
})
export class ExternoComponent {

  public user: any;
  public userId: any;
  public fecha: any;

  public new_user: any;
  public usuario_guardado: any;

  constructor(private _peticionesService: PeticionesService) {
    this.userId = 1;
    this.new_user = {
      "name": "",
      "job": ""
    };
  }

  ngOnInit() {
    this.fecha = new Date(2023, 12, 26);
    this.cargarUsuario();
  }

  cargarUsuario() {
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
      },
      error => {
        console.log(<any>error);
      });
  }

  onSubmit(form: any) {
    this._peticionesService.addUser(this.new_user).subscribe(
      response => {
        console.log(response);
        this.usuario_guardado = response;
        form.reset();
      },
      error => {
        console.log(<any> error)
      });
  }
}
