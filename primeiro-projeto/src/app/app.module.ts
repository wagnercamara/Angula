import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { CarteiraAppComponent }from './carteira-app/carteira-app.component'
import { CursosModule } from './cursos/cursos.module';
@NgModule({
  declarations: [
    AppComponent,
    CarteiraAppComponent,
  ],
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
