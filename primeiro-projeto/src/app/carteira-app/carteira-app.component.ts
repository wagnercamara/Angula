import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component } from "@angular/core";

@Component({
    selector: 'carteira-app',   //Nome da Teg HTML a ser Criada
    template: ` 
    <p> Carteira </p>
    `
})

// todo novo coponente deve ser declarado em um modulo. app.module.ts
// exporte serve para deixar a class publica
export class CarteiraAppComponent{
    
}