import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  //propertie binding
  mainwrapper: string = 'main__wrapper';
  formularioWraper: string = 'formulario__wrapper';
  formulario: string = 'formulario';
  formulariodate: string = 'formulario-date';
  align: string = 'center-header';
  imgnoticia: string = 'imagen-noticia';
  //interpolation

  //variables
  texto: string = '';
  selectedFile: File | null = null;
  noticias: INoticia[] = [{titulo:'Éxito en la conservación de aves',
                           texto:'Según el Fondo para la Vida Silvestre del Sur y el Oeste de Gales (WTSWW, por sus siglas en inglés), este año se han contabilizado 43.626 frailecillos en la isla Skomer, la cifra más alta jamás registrada.',
                           imagen:'assets/puff.png',
                           fecha: '23/06/2025'},
                           {titulo:'Los océanos se están oscureciendo',
                           texto:'El estudio, publicado en Global Change Biology, es la primera evaluación a escala global de los cambios a largo plazo en la llamada zona fótica del océano, la capa superior iluminada por el sol que sustenta más del 90% de la vida marina y mantiene procesos planetarios clave como la producción de oxígeno y el ciclo del carbono.',
                           imagen:'assets/oceano.png',
                           fecha: '01/07/2025'},
                          ]

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      console.log('Selected file:', file);
    }
  }

  updateCharCount(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    this.texto = textarea.value;
  }

  addNoticia(event: Event): void {
  event.preventDefault();

  const tituloInput = (document.getElementById('form1') as HTMLInputElement)?.value;
  const textoInput = (document.getElementById('form2') as HTMLTextAreaElement)?.value;
  const fechaInput = (document.getElementById('form3') as HTMLInputElement)?.value.split('-').reverse().join('/');
  const imagenPath = 'assets/mongo.png';

  const nuevaNoticia: INoticia = {
    titulo: tituloInput,
    texto: textoInput,
    imagen: imagenPath,
    fecha: fechaInput
  };

  this.noticias.unshift(nuevaNoticia); // La añade al principio del Array de noticias
}

}

//INTERFACE JSON
interface INoticia {
  titulo: string;
  texto: string;
  imagen: string;
  fecha: string;
}
