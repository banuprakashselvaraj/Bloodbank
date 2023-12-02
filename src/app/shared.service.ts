import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "https://localhost:44369/api";
  readonly PhotoUrl = "https://localhost:44369/Pictures/";

  constructor(private http:HttpClient) { }

//Login Controller in Server
logindetail(value:any){
  return this.http.post(this.APIUrl+'/Login/authenticate', value);
}

signupdetail(value:any){
  return this.http.post(this.APIUrl+'/Login', value);
}

registerdonordetail(value:any){
  return this.http.post(this.APIUrl+'/RegisterDonor', value);
}

bloodcenterdetail(){
  return this.http.get(this.APIUrl+'/BloodCenter');
}

donorfinddetail(){
  return this.http.get(this.APIUrl+'/RegisterDonor');
}
UploadPhoto(val:any){
  return this.http.post(this.APIUrl+'/RegisterDonor/SaveFile',val);
}
}
