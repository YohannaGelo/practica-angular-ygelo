import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

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
  private cacheDuration = 24 * 60 * 60 * 1000; // 24 horas en milisegundos
  
  constructor(private http: HttpClient) {}
  
  getNoticias(): Observable<any> {
    const currentTime = new Date().getTime();
    const lastUpdated = localStorage.getItem('noticias-last-updated');
    const cachedNoticias = localStorage.getItem(this.newsKey);
  
    if (cachedNoticias && lastUpdated && (currentTime - parseInt(lastUpdated) < this.cacheDuration)) {
      return new Observable((observer) => {
        observer.next(JSON.parse(cachedNoticias));
        observer.complete();
      });
    } else {
      // Si las noticias están desactualizadas o no hay noticias, consulta la API
      const params = {
        category: 'technology',
        language: 'es',
        apiKey: this.apiKey,
      };
  
      return this.http.get(this.apiUrl, { params }).pipe(
        tap((data: any) => {
          this.saveNoticias(data.news);
        })
      );
    }
  }
  
  saveNoticias(noticias: any): void {
    localStorage.setItem(this.newsKey, JSON.stringify(noticias));
    localStorage.setItem('noticias-last-updated', new Date().getTime().toString()); // Guardamos la fecha
  }
  

}
