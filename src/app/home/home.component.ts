import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title!:string
  
  public tarjaDesconto!:string
  public tarjaEnvio!:string
  public tarjaAtendimento!:string
  public tarjaParcelas!:string

  constructor() { }

  ngOnInit(): void {
    this.title = 'Lugar certo para quem ama games!'
    this.tarjaDesconto = 'Descontos de 10% no PIX'
    this.tarjaAtendimento = 'Atendimento rápido'
    this.tarjaEnvio ='Enviamos para todo Brasil'
    this.tarjaParcelas = 'Até 3x sem juros'
  }

}
