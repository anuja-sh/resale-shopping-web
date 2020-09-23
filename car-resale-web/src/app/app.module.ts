import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {CarListComponent} from './car-list/car-list.component';
import { CarComponent } from './car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarListComponent,
    CarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
