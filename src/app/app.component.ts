import { Component, OnInit } from '@angular/core';


interface Tarjeta{
  titulo:string;
  subtitulo:string;
  nro?: number; //el ? hace que sea opcional la propiedad, en todo caso seria nula

}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Mi primer App ANGULAR';

  public ArregloTarjetas: Tarjeta[] = [];


  ngOnInit(): void {
      this.ArregloTarjetas = [
        {titulo:'Video1', subtitulo:'Subtitulo video1', nro:5},
        {titulo:'Video2', subtitulo:'Subtitulo video2'},
        {titulo:'Video3', subtitulo:'Subtitulo video3'},
      ]
  }

}
