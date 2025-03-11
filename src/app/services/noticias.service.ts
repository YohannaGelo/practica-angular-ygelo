import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  // private apiKey = '7e0368f452c9434fb927ad972ded22a7';
  private apiKey = 'rBGnxwKNOp_6gh2ALWo50jE8hT7xTV_WA1IMeG8S40a41oKE';
  
  // private apiUrl = 'https://newsapi.org/v2/everything';
  private apiUrl = 'https://api.currentsapi.services/v1/latest-news';

  constructor(private http: HttpClient) { }

  getNoticias(): Observable<any> {
    // const params = {
    //   q: 'tecnología', // Tema de búsqueda
    //   language: 'es',  // Idioma español
    //   apiKey: this.apiKey
    // };
    const params = {
      category: 'technology', // Filtra por categoría tecnología
      language: 'es',         // Filtra por idioma español
      apiKey: this.apiKey,    // Tu API key
    };
    return this.http.get(this.apiUrl, { params });
  }
}
