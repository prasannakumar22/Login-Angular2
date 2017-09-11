import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { loginComponent } from './login.component';
import { errorComponent } from './error.component';
import { successComponent } from './success.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';





describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
		imports:[ RouterTestingModule.withRoutes([
      { path: 'success', component: successComponent },
	  { path: 'error', component: errorComponent }
    ]),FormsModule],
      declarations: [
        AppComponent,loginComponent,successComponent,errorComponent
      ],
    }).compileComponents();
  }));
  
  
  
  it(`should have as title 'errorMessage'`, async(() => {
    const fixture = TestBed.createComponent(errorComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.errorMessage).toEqual("The Username/Password entered is incorrect.Please enter the correct credentials");
  }));
  
  it(`should have as title 'successMessage'`, async(() => {
    const fixture = TestBed.createComponent(successComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.successMessage).toEqual("Successfully Logged into the application");
  }));
  
  it(`should have as title 'LOGIN'`, async(() => {
    const fixture = TestBed.createComponent(loginComponent);
    const app = fixture.componentInstance;
	var data={"username":"admin","password":"123456"};
	app.onSubmit(data);
    expect(app.formValid).toEqual(true);
    
  }));
  it(`should have as title 'LOGIN'`, async(() => {
    const fixture = TestBed.createComponent(loginComponent);
    const app = fixture.componentInstance;
	var data={"username":"admin123","password":"123456asdasdas"};
	app.onSubmit(data);
    expect(app.formValid).toEqual(false);
    
  }));
  
   
  
   
 
});
