import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private token:TokenStorageService, private router:Router,private toaster: NgToastService ) { }

  CurrentUser = this.token.getUser();

  ngOnInit(): void {
  }

  onLogout(){
    this.token.signOut();
    this.toaster.success({detail:"Logout Successful",duration:5000})
    this.router.navigate(['/login']);
  }
  navigatemap(){
    this.router.navigate(['/map']);
  }

  navigatedashboard(){
    this.router.navigate(['/dashboard']);
  }
  navigateregisterdonor(){
    this.router.navigate(['/registerdonor']);
  }

  navigatebloodcenter(){
    this.router.navigate(['/bloodcenter']);
  }

  navigatefinddonor(){
    this.router.navigate(['/finddonor']);
  }

  navigatealldonorlist(){
    this.router.navigate(['/alldonorlist']);
  }
  


}
