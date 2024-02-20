import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.css']
})
export class UserAuthenticationComponent implements OnInit {
  username!:FormControl;
  emaild:string='';
  password!:FormControl;
  LoginForm!: FormGroup;
  ngOnInit(): void {
    this.LoginForm=new FormGroup({
      username:new FormControl("",[Validators.required,Validators.minLength(4)]),
      password:new FormControl("",[Validators.required])
    });
  }

  routeTologin(){
  //  this.tologinform.emit({ displaylogin:true });
  }

  onLogin(event:MouseEvent){
    console.log(event);
  }

}
