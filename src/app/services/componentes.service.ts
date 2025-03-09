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

  agregarComponente(componente: Componente): Observable<Componente> {
    return this.http.post<Componente>(this.apiUrl, componente);
  }

  // actualizarComponente(componente: Componente): Observable<Componente> {
  //   return this.http.put<Componente>(`${this.apiUrl}?id=${componente.id}`, componente);
  // }

  actualizarComponente(componente: Componente): Observable<Componente> {
    const url = `${this.apiUrl}`; // <-- No incluyas el id en la URL
    return this.http.put<Componente>(url, componente, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  
  eliminarComponente(id: number): Observable<void> {
    const url = `${this.apiUrl}`; // <-- No incluyas el id en la URL
    const body = { id: id }; // <-- Envía el id en el cuerpo de la solicitud
    return this.http.delete<void>(url, { body: body });
  }
}
