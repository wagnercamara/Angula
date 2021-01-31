import { Injectable } from '@angular/core';
// decoreitor @
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(){ return ['java','Ext JS','Angula'];}
}
