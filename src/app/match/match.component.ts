import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Match } from 'src/model/match';
import { MatchService } from 'src/service/match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  nouvmatch=new Match();
  
  message: string | undefined;
   constructor(private httpClient:HttpClient,private matchService: MatchService,private router:Router) { }
   confirmationString:String ="New sport has been added";  
    isAdded:boolean=false;
   ngOnInit(): void {
   }
  
       onSubmit(f: NgForm) {
         
         console.log(this.nouvmatch);
         this.matchService.addMatch(this.nouvmatch);  
         window.alert("match est ajouté !");
         this.router.navigate(['match']);
         isAdded:true;
 
        
        }
}
