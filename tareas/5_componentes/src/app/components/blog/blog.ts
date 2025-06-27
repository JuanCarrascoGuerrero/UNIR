import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {
  //property binding
  mainwrapper: string = 'main__wrapper';
  formularioWraper: string = 'formulario__wrapper';
  formulario: string = 'formulario';
  formulariodate: string = 'formulario-date';
  align: string = 'center-header';
  imgnoticia: string = 'imagen-noticia';
 
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
  event.preventDefault(); //      INTERRUMPIMOS COMPORTAMIENTO POR DEFECTO DEL NAVEGADOR
                          // ( Necesario para formularios manejados directamente por Angular )
                          /*
                          Clic en "Publicar" acciona el navegador:
                              1. Detecta formulario con botón type="submit" 
                              2. aunque action="" esté vacío, enviar formulario y recarga página.
                              3. Interrumpe así flujo de addNoticia(); 
                                 recarga página antes de que Angular complete addNoticia().
                          */

  const tituloInput = (document.getElementById('form1') as HTMLInputElement)?.value;
  const textoInput = (document.getElementById('form2') as HTMLTextAreaElement)?.value;
  const fechaInput = (document.getElementById('form3') as HTMLInputElement)?.value.split('-').reverse().join('/');
  const imagenPath = 'assets/mongo.png';

    // Validacion del formulario
  if (!tituloInput || !textoInput || !fechaInput) {
    alert('Por favor, completa todos los campos del formulario antes de publicar.');
    return;
  }

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
