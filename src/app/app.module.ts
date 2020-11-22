import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { CardComponent } from './components/shared/card/card.component';
import { PrensaComponent } from './components/shared/prensa/prensa.component';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { InfoServiciosComponent } from './components/shared/info-servicios/info-servicios.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    CardComponent,
    PrensaComponent,
    InfoServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    NgbModule,
    NgxTwitterTimelineModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
