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
    this.noticiasService.getNoticias().subscribe(
      (data: any) => {
        this.noticias = data.news; // Ahora accedemos a la propiedad 'news' de la respuesta
  
        // Reordenar las noticias en posiciones aleatorias
        this.noticias.sort(() => Math.random() - 0.5); // Esto mezcla el array de noticias
      },
      (error) => {
        console.error('Error al cargar noticias:', error);
      }
    );
  }
  
}
