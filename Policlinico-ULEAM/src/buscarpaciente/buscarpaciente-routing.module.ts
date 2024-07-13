import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPacienteComponent } from './buscarpaciente.component';

const routes: Routes = [
  { path: '', component: BuscarPacienteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscarPacienteRoutingModule { }
