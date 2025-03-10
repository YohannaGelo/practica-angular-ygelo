import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private apiKey = '7e0368f452c9434fb927ad972ded22a7';
  private apiUrl = 'https://newsapi.org/v2/everything';

  constructor(private http: HttpClient) { }

  getNoticias(): Observable<any> {
    const params = {
      q: 'tecnología', // Tema de búsqueda
      language: 'es',  // Idioma español
      apiKey: this.apiKey
    };
    return this.http.get(this.apiUrl, { params });
  }
}
