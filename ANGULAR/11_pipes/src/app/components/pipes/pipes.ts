import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RecortarTextoPipe } from '../../pipes/recortar-texto-pipe';

@Component({
  selector: 'app-pipes',
  imports: [LowerCasePipe,UpperCasePipe, TitleCasePipe,
            DecimalPipe, PercentPipe, CurrencyPipe,
            DatePipe, JsonPipe,
            RecortarTextoPipe  //custom pipe 
  ],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class Pipes {
  nombre:string = "Juan Carrasco Guerrero"
  racional:number = 32.123545456454
  iva:number = 0.21
  precio:number=39.90
  fecha : Date = new Date()
  array: number[] = [1,2,3,4,2]
  objeto = {1:1,2:2,3:3,4:4,5:2}


  //custom pipe: tres puntos a partir de un length conservando el texto, solo transformando renderizado
  texto:string = " fewq fe f e f ewq fe wqf e wqf  f fe wqf ew qfefewqfewqfewqf f ewq f ewq f  fe wq fe wq fe wf  ewq fe wq fewq f"
}
