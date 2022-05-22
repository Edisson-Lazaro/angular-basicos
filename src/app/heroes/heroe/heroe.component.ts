import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    nombre: string = 'thor';
    edad: number = 25;

    get capitalizarNombre(){
        return this.nombre.toUpperCase();
    }

    //Creamos un metodo
    obtenerNombre():string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void {
        this.nombre = 'spiderman';
    }

    cambiarEdad():void {
        this.edad = 35;
    }

}