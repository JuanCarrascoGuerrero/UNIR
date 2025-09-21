import { Component } from '@angular/core';
import { ISerie } from '../../interfaces/iseries.interface';
import { SERIES } from './series.db';

@Component({
  selector: 'app-series',
  imports: [],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  arraySeries: ISerie[] = SERIES;
  arraySeriesSelect: ISerie[] = [...SERIES];
  //todo
 //arrayCategorias: string[] = SERIES.map(serie => serie.category);

  getByCategory(event:any){
    
    this.arraySeriesSelect = SERIES.filter(serie => serie.category == event.target.value);

  }
}
