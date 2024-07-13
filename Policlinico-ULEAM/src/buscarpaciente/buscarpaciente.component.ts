import { Component } from '@angular/core';
import { BusquedaServices } from '../services/busqueda.services'; // Asegúrate de que la ruta sea correcta
import { RegistroPacientes } from 'src/interfaces/registropacientes.interfaces';

@Component({
  selector: 'app-buscarpaciente',
  templateUrl: './buscarpaciente.component.html',
  styleUrls: ['./buscarpaciente.component.css']
})
export class BuscarPacienteComponent {
  email: string = '';
  pacienteEncontrado: RegistroPacientes | null = null;

  constructor(private busquedaServices: BusquedaServices) {}

  buscar() {
    if (this.email.trim() === '') {
      alert('Por favor ingresa un correo electrónico');
      return;
    }

    console.log('Buscando correo electrónico:', this.email);

    this.busquedaServices.buscarPorCorreo(this.email).subscribe(
      (pacientes: RegistroPacientes[]) => {
        console.log('Pacientes encontrados:', pacientes);
        if (pacientes.length > 0) {
          this.pacienteEncontrado = pacientes[0];
        } else {
          this.pacienteEncontrado = null;
          alert('No se encontró ningún paciente con ese correo electrónico');
        }
      },
      (error) => {
        console.error('Error en la búsqueda:', error);
        alert('Error al buscar pacientes');
      }
    );
  }
}
