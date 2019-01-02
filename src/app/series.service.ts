import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) { }
  public getSeries(): Observable<any> {
    return this.http.get<any>('https://api.themoviedb.org/3/tv/popular?api_key=cbe6876eea22381ea824f7eec9d71233&language=es-ES');
  }
  public getSerie(id: number): Observable<any> {
    return this.http.get<any>('https://api.themoviedb.org/3/tv/' + id + '?api_key=cbe6876eea22381ea824f7eec9d71233&language=es-ES');
  }
}
