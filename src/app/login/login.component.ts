import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
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



    /* Validação Front-end against SQL Injection */
    const listaPalavras: string[] = ["select", "from", "drop", "or", "having", "group", "insert", "exec", "\"", "\'", "--", "#", "*", ";"]


    this.blackList(listaPalavras, this.loginForm.value.password, this.loginForm.value.email)
   //this.checkUser(this.loginForm.value.email,this.loginForm.value.password)

   }


   blackList(palavras:string[], senha:string, email:string){
    let checkSql = true
    palavras.forEach(palavra => { 
       if(senha == palavra) {
        alert("Dados inválidos:" + palavra)
        this.mensagem = "Dados inválidos: " + palavra;
        checkSql = false
      }

    })
    if(checkSql){
        this.checkUser(email,senha)
    }
   }
   
  checkUser(email:string,senha:string):void{
    var check = false
      this.loginService.getUsers().subscribe( (usersRecebids: User[])=>{
      this.listaUsers = usersRecebids
      
      this.listaUsers.forEach(function(value){
        if(value.email==email && value.password==senha){    
          check = true   
        }
       })
       if(check){
        /* Se usuário existe leva para painel admin */
        this.goAdmin()
       }
    })
 
  }
  
  goAdmin() {
    this.router.navigateByUrl('/admin');
  }
 
 
}