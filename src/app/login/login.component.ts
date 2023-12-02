import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';
import { SharedService } from '../shared.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:SharedService, private router:Router, private token:TokenStorageService, private toaster: NgToastService) { }


  EmailId:string | undefined;
  Password:string | undefined;
  LArray:any;


  ngOnInit(): void {
    const token = this.token.getToken();
    if(token != null)
    { this.router.navigateByUrl('dashboard') }
  }
  Logarray(){
    this.LArray={
      EmailId: this.EmailId,
      Password: this.Password
    }
    this.service.logindetail(this.LArray).subscribe(
      (res:any)=>{
        this.token.saveToken(res.token)
        this.token.saveUser(res)
        this.toaster.success({detail:"Login Successfully", summary:"Welcome",duration:3000})
        this.router.navigateByUrl('/dashboard');
      },
      err => {
        if(err.status == 401)
        this.toaster.error({detail:"Login failure", summary:"Check your details",duration:3000})
        else
          console.log(err);
      }
    );
  }
}
