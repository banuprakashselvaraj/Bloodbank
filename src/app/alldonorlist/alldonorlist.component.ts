import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { SharedService } from '../shared.service'


@Component({
  selector: 'app-alldonorlist',
  templateUrl: './alldonorlist.component.html',
  styleUrls: ['./alldonorlist.component.css']
})
export class AlldonorlistComponent implements OnInit {

  alldonorList:any;

  constructor(private service:SharedService, private router:Router,private toaster: NgToastService) { }

  ngOnInit(): void {
    this.refreshalldonorList();
  }

  refreshalldonorList(){
    this.service.donorfinddetail().subscribe(data=>
      this.alldonorList=data);
  }
}
