import { Component } from '@angular/core';

import {Router} from '@angular/router';



@Component({
  
  template:`<a href= "" (click) = "onBack()">  Goto the Login Page</a> 
  <p>{{errorMessage}}</p>`
  
  
})





export class errorComponent {
  errorMessage="The Username/Password entered is incorrect.Please enter the correct credentials";
  
  constructor(private _router:Router){};
  
  onBack(): void { 
      this._router.navigate(['']); 
   } 
  
};
