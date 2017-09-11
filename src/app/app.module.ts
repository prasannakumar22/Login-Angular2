import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { loginComponent } from './login.component';
import { successComponent } from './success.component';
import { errorComponent } from './error.component';


import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
	
	{
		path:'',
		component:loginComponent
	},
	{
		path:'success',
		component:successComponent
	},
	{
		path:'error',
		component:errorComponent
	}

]	



@NgModule({
  declarations: [
    AppComponent,loginComponent,successComponent,errorComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
