import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar módulos del Router de Angular
import { ModuleWithProviders } from '@angular/core';

// Importar componentes
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';

// Array de rutas
const appRoutes: Routes = [
  {path: '', component: ZapatillasComponent},
  {path: 'zapatillas', component: ZapatillasComponent},
  {path: 'videojuegos', component: VideojuegoComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'cursos/:nombre/:alumnos', component: CursosComponent},
  {path: '**', component: VideojuegoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Exportar el módulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);