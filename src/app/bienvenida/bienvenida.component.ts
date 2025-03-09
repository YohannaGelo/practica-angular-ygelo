import { Component, OnInit } from '@angular/core';
import { Componente, ComponentesService } from '../services/componentes.service';

@Component({
  selector: 'app-bienvenida',
  standalone: false,
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})


export class BienvenidaComponent implements OnInit {


  componentes: Componente[] = [];
  tooltipVisible = false;
  componenteSeleccionado: Componente | null = null;
  tooltipStyle = { top: '0px', left: '0px' };

  constructor(private componentesService: ComponentesService) { }

  ngOnInit(): void {
    this.cargarComponentes();
  }


  cargarComponentes(): void {
    this.componentesService.getComponentes().subscribe(
      data => {
        this.componentes = data;
        console.log('Componentes cargados:', data); // Verifica en la consola
      },
      error => console.error('Error al cargar componentes:', error)
    );
  }
  

  mostrarTooltip(componente: Componente): void {
    this.componenteSeleccionado = componente;
    this.tooltipVisible = true;
  }

  ocultarTooltip(): void {
    this.tooltipVisible = false;
  }

  actualizarTooltip(event: MouseEvent): void {
    this.tooltipStyle = {
      top: `${event.clientY + 15}px`,
      left: `${event.clientX + 15}px`
    };
  }

  getPosition(componente: Componente): any {
    // Define las posiciones de los componentes en la placa base
    const posiciones: { [key: number]: { top: string, left: string } } = {
      1: { top: '20%', left: '30%' }, // CPU
      2: { top: '40%', left: '50%' }, // GPU
      3: { top: '10%', left: '70%' }, // RAM
      4: { top: '60%', left: '20%' }, // SSD
      5: { top: '50%', left: '40%' }, // Placa
      6: { top: '70%', left: '60%' }, // PSU
      7: { top: '80%', left: '10%' }, // Refri
      8: { top: '90%', left: '80%' }  // Conexiones
    };

    return posiciones[componente.id] || { top: '0%', left: '0%' };
  }
}
