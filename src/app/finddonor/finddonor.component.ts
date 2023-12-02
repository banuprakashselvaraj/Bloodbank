import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-finddonor',
  templateUrl: './finddonor.component.html',
  styleUrls: ['./finddonor.component.css']
})
export class FinddonorComponent implements OnInit {

  DonorfindList:any;
  
  DonorNameFilter:any="";
  DonorBloodGroupFilter:any="";
  DonorCityFilter:any="";
  DonorListWithoutFilter:any=[];

  constructor(private service:SharedService, private token:TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    this.refreshfinddonorList();
  }
  refreshfinddonorList(){
    this.service.donorfinddetail().subscribe(data=>{
      this.DonorfindList=data;
      this.DonorListWithoutFilter=data;
    });
  }

  FilterFn(){
    var DonorNameFilter = this.DonorNameFilter;
    var DonorCityFilter = this.DonorCityFilter;
    var DonorBloodGroupFilter = this.DonorBloodGroupFilter;

    this.DonorfindList = this.DonorListWithoutFilter.filter(function (el:any){
        return el.Name.toString().toLowerCase().includes(
          DonorNameFilter.toString().trim().toLowerCase()
        )&&
        el.Address.toString().toLowerCase().includes(
          DonorCityFilter.toString().trim().toLowerCase()
        )&&
        el.BloodGroup.toString().toLowerCase().includes(
          DonorBloodGroupFilter.toString().trim().toLowerCase()
        ) 
    
    });
  }

    sortResult(prop:any,asc:any){
      this.DonorfindList = this.DonorListWithoutFilter.sort(function(a:any,b:any){
        if(asc){
            return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
        }else{
          return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
        }
      })
    }

}
