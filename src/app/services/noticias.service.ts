import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  // private apiKey = '7e0368f452c9434fb927ad972ded22a7';
  // private apiKey = 'rBGnxwKNOp_6gh2ALWo50jE8hT7xTV_WA1IMeG8S40a41oKE';
  private apiKey = '_NS63aVAOdid-O5qP5AmV_P8Qxs_V6gQNcIeSIPHg-FehUAd';
  
  // private apiUrl = 'https://newsapi.org/v2/everything';
  private apiUrl = 'https://api.currentsapi.services/v1/latest-news';

  private newsKey = 'noticias'; // Clave para almacenar en localStorage

  constructor(private http: HttpClient) {}

  getNoticias(): Observable<any> {
    // const params = {
    //   q: 'tecnología', // Tema de búsqueda
    //   language: 'es',  // Idioma español
    //   apiKey: this.apiKey
    // };
    // Si ya tenemos noticias almacenadas en localStorage, las devolvemos
    const cachedNoticias = localStorage.getItem(this.newsKey);
    if (cachedNoticias) {
      return new Observable((observer) => {
        observer.next(JSON.parse(cachedNoticias));
        observer.complete();
      });
    } else {
      // Si no tenemos en cache, realizamos la solicitud HTTP
      const params = {
        category: 'technology',
        language: 'es',
        apiKey: this.apiKey,
      };
      return this.http.get(this.apiUrl, { params });
    }
  }

  // Guardar las noticias en el localStorage
  saveNoticias(noticias: any): void {
    localStorage.setItem(this.newsKey, JSON.stringify(noticias));
  }

  // Limpiar las noticias en el localStorage (opcional)
  clearNoticias(): void {
    localStorage.removeItem(this.newsKey);
  }
}
