import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'miTexto',
  standalone: false
})
export class MiTextoPipe implements PipeTransform {

  // Es necesario sanizitar el innerHTML para asegurase de que el contenido no es peligroso
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    const html = `<span style="color: #ff69b4; font-variant: small-caps; font-family: sans-serif;">${value}</span>`;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
