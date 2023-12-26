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

  constructor(private _peticionesService: PeticionesService) {
    this.userId = 1;
  }

  ngOnInit() {
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
}
