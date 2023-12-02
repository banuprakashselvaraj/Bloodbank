import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-registerdonor',
  templateUrl: './registerdonor.component.html',
  styleUrls: ['./registerdonor.component.css']
})
export class RegisterdonorComponent implements OnInit {

  constructor(private service:SharedService, private router:Router,private toaster: NgToastService) { }


  Name:string | undefined;
  Dob:string | undefined;
  BloodGroup:string | undefined;
  PhoneNumber:string | undefined;
  Address:string | undefined;
  Image:string | undefined;
  Description:string | undefined;
  AlcoholConsumption:string | undefined;
  PhotoFileName:any;
  PhotoFilePath:any;
  UserList:any;

  ngOnInit(): void {
  }
  regdon(){
    this.UserList ={

      Name: this.Name,
      Dob: this.Dob,
      BloodGroup: this.BloodGroup,
      PhoneNumber: this.PhoneNumber,
      Address: this.Address,
      // Image: this.Image,
      Description: this.Description,
      AlcoholConsumption: this.AlcoholConsumption,
      // PhotoFileName:this.PhotoFileName,
      // PhotoFilePath:this.service.PhotoUrl+this.PhotoFileName
      PhotoFileName : this.PhotoFileName,
      PhotoFilePath : this.service.PhotoUrl+this.PhotoFileName
    }
    this.service.registerdonordetail(this.UserList).subscribe(res=>
    // this.toaster.error({detail:"Registered Unsuccessfull", summary:"Not done",duration:5000})
      alert(res.toString())
    );
       this.toaster.success({detail:"Registered Successfully", summary:"Done",duration:5000})
    this.router.navigateByUrl('/login');
  }
  uploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }
}
