import { Injectable } from "@angular/core";
import { Firestore, addDoc } from "@angular/fire/firestore";
import { collection } from "firebase/firestore";
import { RegistroPacientes } from "src/interfaces/registropacientes.interfaces";

@Injectable({
    providedIn: 'root'
})
export class RegistroPacientServices {
    constructor(private firestore: Firestore) {}

    addPlace(registroPaciente: RegistroPacientes) {
       // Actualiza el nombre de la colección a la nueva colección en tu base de datos
       const registpacienteRef = collection(this.firestore, 'Pacientes');
       return addDoc(registpacienteRef, registroPaciente);
    }
}
