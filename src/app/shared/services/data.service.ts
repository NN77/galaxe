import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getGames(queryParams?) {
    return this.http.get<any[]>('api/games', { params: queryParams });
  }
}
