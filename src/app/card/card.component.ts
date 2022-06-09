import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image: string="https://www.armadilloamarillo.com/wp-content/uploads/spring-boot-ok.png";
  public Titulo: string="Curso de ANGULAR con interpolación";


  constructor() { }

  ngOnInit(): void {
  }

}
