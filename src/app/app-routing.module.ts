import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
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



const routes: Routes = [
  {path:'s_admine', component:AdminComponent},
  {path:'se_connecter',component:CompteComponent},
  {path:'acceuil', component:AcceuilComponent },
  {path:'s_inscrire',component:AjouterCompteComponent},
  {path:'interfaceAdmin' ,component:InterfaceAdminComponent},
  {path:'parieurs', component:ParieursComponent},
  {path:'listeSports' ,component:ListesportsComponent },
  {path:'listeMatchs' ,component:ListematchsComponent },
  {path:'ajout_sport', component:AjouterSportComponent},
  {path:'ajout_match', component:AjouterMatchComponent},
  {path:'update_sport/:id' ,component:ModifierSportComponent},
  {path:'sport/:id' ,component:ListematchsComponent},
  {path:'match/:id' ,component:MatchComponent},
  {path:'listeConcours' ,component:ConcoursComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
