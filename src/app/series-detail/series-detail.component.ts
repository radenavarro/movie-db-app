import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import {SeriesService} from '../series.service';
import {PeliculasService} from '../peliculas.service';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css']
})
export class SeriesDetailComponent implements OnInit {
  public serie: any;

  constructor(private router: Router, private route: ActivatedRoute, private seriesService: SeriesService) { }

  ngOnInit() {
    this.getSerie();
  }
  getSerie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // console.log('Id -> ' + id);
    this.seriesService.getSerie(id).subscribe(
      serie => {
        this.serie = serie;
        console.log(this.serie);
      },
      error => {
        console.log(error);
        this.router.navigateByUrl('/404');
      }
    );
  }

}
