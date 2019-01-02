import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }
  public getFilms(): Observable<any> {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/popular?api_key=cbe6876eea22381ea824f7eec9d71233&language=es-ES');
  }
  public getFilm(id: number): Observable<any> {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/' + id + '?api_key=cbe6876eea22381ea824f7eec9d71233&language=es-ES');
  }


}
