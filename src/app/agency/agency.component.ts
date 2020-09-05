import { Component, OnInit } from '@angular/core';
import { AgencyService } from '../services/agency.service';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {

  agencies = [];
  total:number = 0;
  page:number = 1;

  constructor(
    private agencyService : AgencyService
  ) {}

  ngOnInit(): void {
    this.getAgencies();
  }

  getAgencies(){
    var result: any;
    this.agencyService.getList().subscribe((res)=>{
      result = res;
    }, err => {
      console.log(err);
    }, () => {
      this.agencies = result;
      this.total = result.length;
    });
  }

  remove(id:number){
    if(window.confirm('Bạn thực sự muốn xóa')){
      this.agencyService.delete(id).subscribe((res)=>{      
      }, err => {
        
        console.log(err);
        alert('Xóa không thành công');
  
      }, () => {
        
        alert('Xóa thành công');
        this.getAgencies();
  
      });
    }    
    else{
      alert('Hành động bị hủy bởi người dùng');
    }
  }

}
