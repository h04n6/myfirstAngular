import { Injectable } from '@angular/core';
import { API } from './api';
@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(
    private api:API
  ) { }
  getList(){
    return this.api.get('/api/races');
  }
  get(id:number){
    return this.api.get(`/api/races/${id}`);
  }
  get_RacesResgisteredUsers(id:number){
    return this.api.get(`/api/races/resgisteredUsers/${id}`);
  }
  get_RacesUpdateRank(id:number){
    return this.api.get(`/api/races/updateRank/${id}`);
  }
  get_RacesGetRank(id:number,id_pagesize:number){
    return this.api.get(`/api/races/getRank/${id}?page=1&pageSize=${id_pagesize}`);
  }
  get_RacesGetAgencyRank(id:number,id_pagesize:number){
    return this.api.get(`/api/races/getAgencyRank/${id}?page=1&pageSize=${id_pagesize}`);
  }
}
