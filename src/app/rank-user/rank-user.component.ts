import { Component, OnInit } from '@angular/core';
import {RaceService} from '../services/race.service';
@Component({
  selector: 'app-rank-user',
  templateUrl: './rank-user.component.html',
  styleUrls: ['./rank-user.component.css']
})
export class RankUserComponent implements OnInit {
  rankuser = [];
  total:number = 0;
  page:number = 1;
  constructor(
    private RankUserService: RaceService
  ) { }

  ngOnInit(): void {
    this.getRankUser();
  }
  getRankUser(){
    var result: any;
    this.RankUserService.get_RacesGetRank(1,10000).subscribe((res)=>{
      result = res;
    }, err => {
      console.log(err);
    }, () => {
      
      this.rankuser = result.users;    
      this.total = result.total;
      console.log(result);
    });
  }

}
