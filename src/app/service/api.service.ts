import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private languageDataUrl = 'https://script.google.com/macros/s/AKfycbywxsqrihy_yl-if2TvEXIU_dRh9z5SHMWY6c8fSjRZsFCOED_YKSX2ZXlE1UfC-Dfa/exec';

  constructor(private http: HttpClient) { }

  // Method to send POST request
  sendData(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'text/plain;charset=utf-8'
    });
    return this.http.post(this.languageDataUrl, JSON.stringify(data), { headers });
  }
  
  // Method to send GET request
  getData(): Observable<any> {
    return this.http.get(this.languageDataUrl);
  }

}