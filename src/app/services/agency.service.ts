import { Injectable } from '@angular/core';
import { API } from './api';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(
    private api : API
  ) { }

  getList(){
    return this.api.get('/api/agencies?keyword=&skip=0&limit=100');
  }

  add(data:any){
    return this.api.post('/api/agencies',data);
  }

  edit(id:number, data:any){
    return this.api.put(`/api/agencies/${id}`,data);
  }

  delete(id:number){
    return this.api.delete(`/api/agencies/${id}`);
  }

  getById(id:number){
    return this.api.get(`/api/agencies/${id}`);
  }
}
