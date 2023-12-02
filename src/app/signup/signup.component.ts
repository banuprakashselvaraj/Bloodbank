import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:SharedService, private router:Router,private toaster: NgToastService) { }

  Name:string | undefined;
  PhoneNumber:string | undefined;
  Address:string | undefined;
  EmailId:string | undefined;
  Password:string | undefined;
  UserList:any;

  ngOnInit(): void {
  }
  signUp(){
    this.UserList ={
      Name: this.Name,
      PhoneNumber: this.PhoneNumber,
      Address: this.Address,
      EmailId: this.EmailId,
      Password: this.Password
    }
    this.service.signupdetail(this.UserList).subscribe(res=>
    // this.toaster.success({detail:"Registered Successfully", summary:"Done",duration:5000})
      alert(res.toString())
    );
    this.router.navigateByUrl('/login');
  }

}
