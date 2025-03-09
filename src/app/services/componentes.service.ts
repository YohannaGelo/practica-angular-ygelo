import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Estructura de mi tabla
export interface Componente {
  id: number;
  nombre: string;
  descripcion: string;
  url_imagen: string;
  tipo: string;
}


@Injectable({
  providedIn: 'root'
})
export class ComponentesService {

  // url de mi api
  private apiUrl = 'https://ruizgijon.ddns.net/coliney/api_pc/api.php';

  constructor(private http: HttpClient) { }

  getComponentes(): Observable<Componente[]> {
    return this.http.get<Componente[]>(this.apiUrl);
  }

  getComponenteById(id: number): Observable<Componente> {
    return this.http.get<Componente>(`${this.apiUrl}?id=${id}`);
  }

  getComponentesPorTipo(tipo: string): Observable<Componente[]> {
    return this.http.get<Componente[]>(`${this.apiUrl}?tipo=${tipo}`);
  }
}
