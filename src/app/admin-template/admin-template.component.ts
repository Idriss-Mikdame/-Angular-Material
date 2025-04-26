import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'
})
export class AdminTemplateComponent implements OnInit{

  constructor(public   authServices :AuthenticationService) {
  }

  ngOnInit(): void {
  }


  logout() {
    this.authServices.logout()
  }
}
