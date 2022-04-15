import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompteComponent } from './compte/compte.component';
import { AjouterCompteComponent } from './ajouter-compte/ajouter-compte.component';
import { InterfaceAdminComponent } from './interface-admin/interface-admin.component';
import { ParieursComponent } from './parieurs/parieurs.component';
import { ListesportsComponent } from './listesports/listesports.component';
import { AjouterSportComponent } from './ajouter-sport/ajouter-sport.component';
import { AjouterMatchComponent } from './ajouter-match/ajouter-match.component';
import { ModifierSportComponent } from './modifier-sport/modifier-sport.component';
import { MatchComponent } from './match/match.component';
import { ListematchsComponent } from './listematchs/listematchs.component';
import { ConcoursComponent } from './concours/concours.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AcceuilComponent,
    NavbarComponent,
    FooterComponent,
    CompteComponent,
    AjouterCompteComponent,
    InterfaceAdminComponent,
    ParieursComponent,
    ListesportsComponent,
    AjouterSportComponent,
    AjouterMatchComponent,
    ModifierSportComponent,
    MatchComponent,
    ListematchsComponent,
    ConcoursComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
