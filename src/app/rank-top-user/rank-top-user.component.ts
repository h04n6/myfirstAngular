import { Component, OnInit } from '@angular/core';
import {RaceService} from '../services/race.service';
@Component({
  selector: 'app-rank-top-user',
  templateUrl: './rank-top-user.component.html',
  styleUrls: ['./rank-top-user.component.css']
})
export class RankTopUserComponent implements OnInit {

  constructor(
    private RankUserService: RaceService
  ) { }
  usertop = [];
  agencytop = [];
  nametopuser:string = "";
  totaluser:number = 0;
  totalangency:number = 0;
  ngOnInit(): void {
    this.getTotalUser();
    this.getTotalAgency();
    this.getTopUser();
    this.getTopAgency();
  
  }
  getTotalUser(){
    var result: any;
    this.RankUserService.get_RacesGetRank(1,1000).subscribe((res)=>{
      result = res;
    }, err => {
      console.log(err);
    }, () => {
      this.totaluser = result.total;     
    });
  }

  getTopUser(){
    var result: any;
    this.RankUserService.get_RacesGetRank(1,1).subscribe((res)=>{
      result = res;
    }, err => {
      console.log(err);
    }, () => {
      this.usertop = result.users;
      console.log(result);
    });
  }

  getTotalAgency(){
    var result: any;
    this.RankUserService.get_RacesGetAgencyRank(1,1000).subscribe((res)=>{
      result = res;
    }, err => {
      console.log(err);
    }, () => {
      this.totalangency = result.total;
    });
  }
  getTopAgency(){
    var result: any;
    this.RankUserService.get_RacesGetAgencyRank(1,1).subscribe((res)=>{
      result = res;
    }, err => {
      console.log(err);
    }, () => {
      this.agencytop = result.agencies;
    });
  }

  


}
