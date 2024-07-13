import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from 'src/navegacion/navegacion.component';
import { InicioComponent } from 'src/inicio/inicio.component';
import { InicioSesionComponent } from 'src/inicio-sesion/inicio-sesion.component';
import { RegistroconsultaComponent } from 'src/registroconsulta/registroconsulta.component';
import { HospitalizacionComponent } from 'src/hospitalizacion/hospitalizacion.component';
import { HistorialclinicoComponent } from 'src/historialclinico/historialclinico.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { FirestoreModule, provideFirestore, getFirestore } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';
import { BuscarpacienteModule } from 'src/buscarpaciente/buscarpaciente.module'; // Importa el módulo

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    InicioComponent,
    InicioSesionComponent,
    RegistroconsultaComponent,
    HospitalizacionComponent,
    HistorialclinicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FirestoreModule,
    RouterModule,
    BuscarpacienteModule, // Importa el módulo que contiene BuscarPacienteComponent
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
