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
  
    constructor(private noticiasService: NoticiasService) { }
  
    ngOnInit(): void {
      this.cargarNoticias();
    }
  
    cargarNoticias(): void {
      this.noticiasService.getNoticias().subscribe(
        (data: any) => {
          this.noticias = data.articles; // Asigna las noticias a la variable
        },
        (error) => {
          console.error('Error al cargar noticias:', error);
        }
      );
    }
}
