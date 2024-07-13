import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from 'src/services/places.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  formLogin: FormGroup;
  formReg: FormGroup;
  showErrorMessage: boolean = false;

  constructor(private PlacesService: PlacesService, private router: Router) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });

    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.PlacesService.register(this.formReg.value)
      .then(response => {
        console.log(response);
        alert('Registro exitoso. ¡Bienvenido/a!, ahora inicia sesión');
        this.router.navigate(['/inicio-sesion']);
      })
      .catch(error => console.log(error));
  }

  handleSignIn(): void {
    const signInElement = document.querySelector('.sign-in');
    const signUpElement = document.querySelector('.sign-up');

    if (signInElement && signUpElement) {
      signInElement.classList.toggle('active');
      signUpElement.classList.toggle('active');
    }
  }

  handleSignUp(): void {
    const signInElement = document.querySelector('.sign-in');
    const signUpElement = document.querySelector('.sign-up');

    if (signInElement && signUpElement) {
      signInElement.classList.toggle('active');
      signUpElement.classList.toggle('active');
    }
  }

  onValidar() {
    this.showErrorMessage = false; // Reiniciar el estado del mensaje de error

    // Obtener el correo y la contraseña del formulario
    const email = this.formLogin.get('email')?.value;
    const password = this.formLogin.get('password')?.value;

    // Realizar la autenticación en Firebase
    this.PlacesService.iniciosesion({ email, password })
      .then(response => {
        console.log(response);
        this.router.navigate(['/inicio']);
      })
      .catch(error => {
        console.log(error);

        // Verificar si el error es debido a que el correo no existe
        if (error.code === 'auth/user-not-found') {
          this.showErrorMessage = true; // Establecer showErrorMessage a true si el correo no existe
        } else {
          // Manejar otros errores si es necesario
          // Por ejemplo, si la contraseña es incorrecta, el código sería 'auth/wrong-password'
        }
      });
  }

  onClick() {
    this.PlacesService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/inicio']);
      })
      .catch(error => console.log(error));
  }
}
