import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Sport } from 'src/model/sport';
import { MatchService } from 'src/service/match.service';

@Component({
  selector: 'app-ajouter-sport',
  templateUrl: './ajouter-sport.component.html',
  styleUrls: ['./ajouter-sport.component.css']
})
export class AjouterSportComponent implements OnInit {

  nouvsport=new Sport();
  
  message: string | undefined;
   constructor(private httpClient:HttpClient,private matchService: MatchService,private router:Router) { }
   confirmationString:String ="New sport has been added";  
    isAdded:boolean=false;
   ngOnInit(): void {
   }
  
       onSubmit(f: NgForm) {
         
         console.log(this.nouvsport);
         this.matchService.addSport(this.nouvsport);  
         window.alert("sport est ajouté !");
         this.router.navigate(['listeSports']);
         isAdded:true;
 
        
        }
       
}
