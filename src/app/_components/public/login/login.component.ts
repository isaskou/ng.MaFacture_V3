import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/_models/userModel';
import { UserLoginService } from 'src/app/_services/user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMsg: string;


  constructor(
    private builder : FormBuilder,
    private user : UserLoginService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.loginForm=this.builder.group({
      email:['', [Validators.required]],
      pwd:['', [Validators.required]]
    });
  }

  login():void {
    if(this.user.currentUser !==null)
    {
      if(this.loginForm.value.email === this.user.currentUser.email 
        && this.loginForm.value.pwd === this.user.currentUser.password)
        {
          let userToConnect = new UserModel();
          userToConnect.email=this.loginForm.value.email
          userToConnect.password=this.loginForm.value.pwd
          this.user.login(userToConnect)
        }
      else {
        this.errorMsg='l\'adresse mail et le mot de passe ne correspondent pas !';
      }
    }
  }

}
