import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MenuComponent } from './ui/menu/menu.component';
import { MenuLateralComponent } from './ui/menu-lateral/menu-lateral.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './ui/footer/footer.component';
import { AlertaComponent } from './page/alerta/alerta.component';
import { ProatividadeComponent } from './page/proatividade/proatividade.component';
import { SobreComponent } from './page/sobre/sobre.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuLateralComponent,
    DashboardComponent,
    FooterComponent,
    AlertaComponent,
    ProatividadeComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
