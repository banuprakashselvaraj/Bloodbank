import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { SharedService } from '../shared.service'

@Component({
  selector: 'app-bloodcenter',
  templateUrl: './bloodcenter.component.html',
  styleUrls: ['./bloodcenter.component.css']
})
export class BloodcenterComponent implements OnInit {

  BloodCenterList:any;
 
  constructor(private service:SharedService, private router:Router,private toaster: NgToastService) { }

  ngOnInit(): void {
    this.refreshBloodCenterList();
  }

  refreshBloodCenterList(){
    this.service.bloodcenterdetail().subscribe(data=>
      this.BloodCenterList=data);
  }
}
