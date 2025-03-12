import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-bienvenida',
  standalone: false,
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css',
})
export class BienvenidaComponent implements OnInit {
  noticias: any[] = []; // Almacena las noticias

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(): void {
    this.cargarNoticias();
  }

  cargarNoticias(): void {
    // Intentamos obtener las noticias desde localStorage
    const noticiasGuardadas = localStorage.getItem('noticias');

    if (noticiasGuardadas) {
      // Si encontramos noticias en localStorage, las usamos
      this.noticias = JSON.parse(noticiasGuardadas);
      this.mezclarNoticias();
    } else {
      // Si no hay noticias en localStorage, realizamos la solicitud a la API
      this.noticiasService.getNoticias().subscribe(
        (data: any) => {
          this.noticias = data.news; // Asigna las noticias a la variable
          this.mezclarNoticias();
          this.noticiasService.saveNoticias(this.noticias); // Guarda las noticias en el localStorage
        },
        (error) => {
          console.error('Error al cargar noticias:', error);
        }
      );
    }
  }

    // Función para mezclar el array de noticias aleatoriamente
    mezclarNoticias(): void {
      this.noticias.sort(() => Math.random() - 0.5);
    }
}
