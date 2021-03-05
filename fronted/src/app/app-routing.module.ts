import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importamos los componentes
import { RegistrosComponent } from './componentes/registros/registros.component';
import { RegistrosAddComponent } from './componentes/registros/registros-add/registros-add.component';

const routes: Routes = [
  {
    path: 'registros',
    component: RegistrosComponent
  },
  {
    path: 'registros/:añadir',
    component: RegistrosAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
