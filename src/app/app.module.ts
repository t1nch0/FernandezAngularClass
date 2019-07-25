import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { QuotesService } from './servicios/quotes.service';
import { PruebaComponent } from './prueba/prueba.component';
import { Prueba2Component } from './prueba2/prueba2.component';
import { DirectivapractDirective } from './directivas/directivapract.directive';

// import { FrasesComponent } from './frases/frases.component';

@NgModule({
  declarations: [
    AppComponent,
    // FrasesComponent,
    PruebaComponent,
    Prueba2Component,
    DirectivapractDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  providers: [QuotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
