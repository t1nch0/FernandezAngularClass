import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class QuotesService {

  constructor(private http: HttpClient) { }
  getQuotes(): Observable<any> {
    // let url = 'http://quotes.stormconsultancy.co.uk/random.json';
    return this.http.get('http://quotes.stormconsultancy.co.uk/random.json');
  }
}
