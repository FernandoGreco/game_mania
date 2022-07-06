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

  listaUsers = [] as User[]
  ngOnInit() {

    
  }
  rota  = Router
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
    this.checkUser(this.loginForm.value.email,this.loginForm.value.password)
   }

  checkUser(email:string,senha:string): void{
    this.loginService.getUsers().subscribe( (usersRecebids: User[])=>{
      this.listaUsers = usersRecebids

      this.listaUsers.forEach(function(value){
        if(value.email==email && value.password==senha){
          console.log('usuário existe')      
        }
      })

    })
    
  }
 
}