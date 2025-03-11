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
          'https://drive.google.com/file/d/1NQbw_U4hz9g9GnPH1cmvBhqhaCHpwJpH/preview'
        ),
      },
      {
        name: 'Guía sobre Conectores',
        url: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://drive.google.com/file/d/1Ijeizuw7FHM7lj7D3SGWes-myhOzaCPU/preview'
        ),
      },
      {
        name: 'Guía sobre HDD',
        url: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://drive.google.com/file/d/1RAFSDJBrxebnRyN5iBrr37cIB-PdMRdZ/preview'
        ),
      },
      {
        name: 'Mantenimiento de Periféricos',
        url: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://drive.google.com/file/d/1AasZzx6GyT4h4rZ69OS1xc2vJCigxAob/preview'
        ),
      },
      {
        name: 'Montaje de PC de Sobremesa',
        url: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://drive.google.com/file/d/1OY_glRcHF-reOxx0Pa877QY2p5U2t8HR/preview'
        ),
      },
      {
        name: 'Nuevas Tendencias',
        url: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://drive.google.com/file/d/19ETs5pBjMbMRIavrNK0tscYxcHv_ueCU/preview'
        ),
      },
      {
        name: 'Reparación de Portátiles',
        url: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://drive.google.com/file/d/1sW64i5MIONAo1QzwSxB2giwHzE_8ilwo/preview'
        ),
      },
    ];
  }

  selectPdf(index: number): void {
    this.selectedPdfIndex = index;
  }

  
}
