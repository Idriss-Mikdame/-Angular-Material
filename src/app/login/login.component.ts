import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
    public loginFormGroup! : FormGroup;
    constructor(private Fb : FormBuilder,private Authentication: AuthenticationService,
                private route:Router) {

    }


  ngOnInit(): void {
      this.loginFormGroup = this.Fb.group({
        username : this.Fb.control(''),
        password : this.Fb.control('')
      })
  }

  login() {
     let  username =this.loginFormGroup.value.username;
     let  password = this.loginFormGroup.value.password;
     let auth : boolean = this.Authentication.login(username,password);
     if (auth){
       this.route.navigateByUrl("/admin")
     }
  }
}
