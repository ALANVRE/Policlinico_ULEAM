import { Injectable } from "@angular/core";
import { Firestore, collection, query, where, getDocs, DocumentData, QuerySnapshot } from "@angular/fire/firestore";
import { Observable, from, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { RegistroPacientes } from "src/interfaces/registropacientes.interfaces";

@Injectable({
  providedIn: 'root'
})
export class BusquedaServices {
  constructor(private firestore: Firestore) {}

  buscarPorCorreo(email: string): Observable<RegistroPacientes[]> {
    const busquedaRef = collection(this.firestore, 'Pacientes');
    const q = query(busquedaRef, where('email', '==', email));

    console.log('Consulta Firestore creada:', q);

    return from(getDocs(q)).pipe(
      map((querySnapshot: QuerySnapshot<DocumentData>) => {
        console.log('Resultados de la consulta:', querySnapshot.docs.length);
        querySnapshot.docs.forEach(doc => console.log('Documento encontrado:', doc.id, doc.data()));
        return querySnapshot.docs.map((doc) => {
          const data = doc.data() as RegistroPacientes;
          console.log('Documento procesado:', doc.id, data);
          return { id: doc.id, ...data };
        });
      }),
      catchError((error) => {
        console.error('Error en la búsqueda:', error);
        return throwError('Error al buscar pacientes');
      })
    );
  }
}
