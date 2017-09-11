import { Component } from '@angular/core';

import { Router } from '@angular/router';

import{FormGroup} from '@angular/forms';


@Component({
  
  templateUrl:'./login.component.html'
  
})



export class loginComponent {
  
  data={};
  loginForm: FormGroup;
  formValid: boolean = false;
  
  constructor(private _router:Router){};
  
  onSubmit(data){
	console.log("in the submit function");
	if(data.username=="admin" && data.password=="123456"){
		this.formValid=true;
		this._router.navigate(['success']);
		
		
	}
	else{
		
		this._router.navigate(['error']);
	}
	
	
  
  }
}
