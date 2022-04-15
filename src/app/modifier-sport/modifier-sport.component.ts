import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sport } from 'src/model/sport';
import { MatchService } from 'src/service/match.service';

@Component({
  selector: 'app-modifier-sport',
  templateUrl: './modifier-sport.component.html',
  styleUrls: ['./modifier-sport.component.css']
})
export class ModifierSportComponent implements OnInit {

  public nouvspo=new Sport;
  id:number;

  constructor(private servicespo:MatchService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.servicespo.Updatesport(this.id).subscribe(data=>{
      this.nouvspo=data;
    })
  }
  onSubmit(){
    this.servicespo.Updatesport2(this.id, this.nouvspo).subscribe(data=>{
      this.router.navigate(['/interfaceAdmin']);
    })

  }

}