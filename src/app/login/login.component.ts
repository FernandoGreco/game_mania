import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  }

  loginModel = new User();
  mensagem = ""

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);

    
    this.loginService.login(this.loginModel).subscribe((response)=>{
      this.router.navigateByUrl('')
    }, (respostaErro)=>{
      this.mensagem = respostaErro.console.error()
      console.log(this.mensagem)
      
    
    })
   
  }




 
}