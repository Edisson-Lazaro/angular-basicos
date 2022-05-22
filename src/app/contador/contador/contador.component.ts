import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1> {{titulo}} </h1>
<!--Los eventos son definidos con (), despues de los parentesis
escribimos una expresion de javascript-->
<button (click)="acumular(base)">+{{base}}</button>

<span>La base es : {{acumulador}}</span>

<button (click)="acumular(-base)">-{{base}}</button>
    `

})

export class ContadorComponent {

    public titulo: string = 'Contador de numeros';
    public base: number = 3;
    public acumulador: number = 0;

    //Creamos un metodo
    acumular(valor: number) {
        return this.acumulador += valor;
    }

}