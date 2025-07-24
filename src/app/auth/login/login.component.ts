import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Subscriber } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm = new FormControl('',[Validators.required]);
  passwordForm = new FormControl('',[Validators.required, Validators.minLength(4)]);
  rememberForm = new UntypedFormControl(false);
  formGroup = new FormGroup([
    this.loginForm,
    this.passwordForm,
  ]);

  showPassword: boolean = false;

  constructor(private authService: AuthService, 
              private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem("REMEMBER")) {
      this.loginForm.setValue(localStorage.getItem("USER"));
      this.passwordForm.setValue(localStorage.getItem("PASSWORD"));
      this.rememberForm.setValue(true);
    }
  }

  alternarVisibilidadeSenha() {
    this.showPassword = !this.showPassword;
  }
  
  entrar() {
    this.formGroup.markAllAsTouched();
    if(this.formGroup.valid){
      this.authService.login({
        username: this.loginForm.value!,
        password: this.passwordForm.value!
      })
      .subscribe({
        next: (res) => {
          console.log('Login feito com sucesso', res);
          if (this.rememberForm.value) {
            localStorage.setItem("USER", this.loginForm.value!);
            localStorage.setItem("PASSWORD", this.passwordForm.value!);
            localStorage.setItem("REMEMBER", 'true');
          } else {
            localStorage.removeItem("USER");
            localStorage.removeItem("PASSWORD");
            localStorage.removeItem("REMEMBER");
          }
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Erro no login', err);
          alert("Usuário não encontrado.");
        }
      });
    }
  }

  register() {
    alert('Você clicou em Cadastrar');
  }

}
