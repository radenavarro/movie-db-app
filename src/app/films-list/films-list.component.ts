import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../peliculas.service';
@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  films: Array<any>;
  titulo: string;
  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.titulo="Listado de Peliculas";
    console.log("Componente listado de peliculas cargado");
    this.getPeliculas();
  }
  getPeliculas() {
    this.peliculasService.getFilms().subscribe(
      result => {
        this.films = result.results;
        console.log(result);
      },
      error => {
        console.error(error);
      }
    );
  }
}
