import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent {

  mostrar:boolean = true;

  frase:any = {
    autor: 'Autor',
    mensaje: 'Mensaje a mostrar'
  }

  personajes:string[] = ['Spiderman', 'Venom', 'Dr. Octopus'];
}
