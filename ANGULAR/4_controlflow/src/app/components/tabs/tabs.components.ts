import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.components.html',
  styleUrl: './tabs.components.css'
})
export class TabsComponents {
  currentSection: string = "madrid"

  cityList: any = [{
    id: 1,
    city: "london",
    title: "🌍 London",
    description: "London is the capital of the UK. Famous for Big Ben, the British Museum, and the River Thames. Known for its red double-decker buses and royal heritage."
  },
{
    id: 2,
    city: "paris",
    title: "🗼 Paris",
    description: "Paris, the city of lights, is home to the Eiffel Tower, the Louvre, and the River Seine. Renowned for its cuisine, fashion, and romantic charm."
  },
{
    id: 3,
    city: "madrid",
    title: "🇪🇸 Madrid",
    description: "Madrid, Spain’s vibrant capital, features Plaza Mayor, the Prado Museum, and flamenco culture. Known for tapas, Real Madrid FC, and lively nightlife."
  }]

  changeSelection(city:string){
    this.currentSection = city;
  }


}
