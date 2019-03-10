import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  addBooking(booking): Observable<any[]> {
    return this.http.post<any[]>('api/booking', booking);
  }
}
