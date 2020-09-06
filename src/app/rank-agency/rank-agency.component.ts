import { Component, OnInit } from '@angular/core';
import {RaceService} from '../services/race.service';
@Component({
  selector: 'app-rank-agency',
  templateUrl: './rank-agency.component.html',
  styleUrls: ['./rank-agency.component.css']
})
export class RankAgencyComponent implements OnInit {
  rankagency = [];
  total:number = 0;
  page:number = 1;
  constructor(
    private RankAgencyService: RaceService
  ) { }

  ngOnInit(): void {
    this.getRankUser();
  }
  getRankUser(){
    var result: any;
    this.RankAgencyService.get_RacesGetAgencyRank(1,1000).subscribe((res)=>{
      result = res;
    }, err => {
      console.log(err);
    }, () => {
      this.rankagency = result.agencies;    
      this.total = result.total;
      console.log(result);
    });
  }
}
