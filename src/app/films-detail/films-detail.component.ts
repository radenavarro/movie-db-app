import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-films-detail',
  templateUrl: './films-detail.component.html',
  styleUrls: ['./films-detail.component.css']
})
export class FilmsDetailComponent implements OnInit {
  public film: any;

  constructor(private router: Router, private route: ActivatedRoute, private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.getFilm();
  }

  getFilm(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('Id -> ' + id);
    this.peliculasService.getFilm(id).subscribe(
      film => {
        this.film = film;
        console.log(this.film);
      },
      error => {
        console.log(error);
        this.router.navigateByUrl('/404');
      }
    );
  }
}
