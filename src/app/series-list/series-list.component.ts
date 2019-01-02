import { Component, OnInit } from '@angular/core';
import {SeriesService} from '../series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  series: Array<any>;
  titulo: string;
  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
    this.titulo = 'Listado de series';
    console.log('Componente listado de series cargado');
    this.getSeries();
  }
  getSeries() {
    this.seriesService.getSeries().subscribe(
      result => {
        this.series = result.results;
        console.log(result);
      },
      error => {
        console.error(error);
      }
    );
  }

}
