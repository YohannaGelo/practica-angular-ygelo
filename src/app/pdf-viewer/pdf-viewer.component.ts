import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-viewer',
  standalone: false,
  templateUrl: './pdf-viewer.component.html',
  styleUrl: './pdf-viewer.component.css',
})
export class PdfViewerComponent implements OnInit {
  pdfList: { name: string; url: SafeResourceUrl }[] = [];

  selectedPdfIndex = -1;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Inicializar pdfList después de que sanitizer esté disponible
    this.pdfList = [
      {
        name: 'Aprende sobre Chasis',
        url: this.sanitizer.bypassSecurityTrustResourceUrl(
          '/assets/pdfs/aprendeChasis.pdf'
        ),
      },
      {
        name: 'Aprende sobre Conectores',
        url: this.sanitizer.bypassSecurityTrustResourceUrl(
          '/assets/pdfs/aprendeConectores.pdf'
        ),
      },
      {
        name: 'Aprende sobre HDD',
        url: this.sanitizer.bypassSecurityTrustResourceUrl(
          '/assets/pdfs/aprendeHDD.pdf'
        ),
      },
      {
        name: 'Mantenimiento de Periféricos',
        url: this.sanitizer.bypassSecurityTrustResourceUrl(
          '/assets/pdfs/mantenimientoPerifericos.pdf'
        ),
      },
      {
        name: 'Montaje de PC de Sobremesa',
        url: this.sanitizer.bypassSecurityTrustResourceUrl(
          '/assets/pdfs/montajePcSobremesa.pdf'
        ),
      },
      {
        name: 'Nuevas Tendencias',
        url: this.sanitizer.bypassSecurityTrustResourceUrl(
          '/assets/pdfs/nuevasTendencias.pdf'
        ),
      },
      {
        name: 'Reparación de Portátiles',
        url: this.sanitizer.bypassSecurityTrustResourceUrl(
          '/assets/pdfs/reparacionPortatil.pdf'
        ),
      },
    ];
  }

  selectPdf(index: number): void {
    this.selectedPdfIndex = index;
  }
}
