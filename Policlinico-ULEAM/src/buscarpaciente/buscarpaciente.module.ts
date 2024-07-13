import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuscarPacienteRoutingModule } from './buscarpaciente-routing.module';
import { BuscarPacienteComponent } from './buscarpaciente.component';
import { BusquedaServices } from '../services/busqueda.services'; // Asegúrate de que la ruta sea correcta

@NgModule({
  declarations: [
    BuscarPacienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BuscarPacienteRoutingModule
  ],
  providers: [BusquedaServices]
})
export class BuscarpacienteModule { }
