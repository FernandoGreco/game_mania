import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title!:string;
  public text!:string;
  constructor() { }

  ngOnInit(): void {
    this.title = 'Lugar certo para quem ama games!';
    this.text = 'Lugar certo para quem ama games!';

  }

}
