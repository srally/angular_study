import { AuthenticationService } from '@_core/services';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators, NgControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  submitted: boolean = false;
  registrationForm: FormGroup
  ern: string
  first_name: string
  last_name: string
  title: string
  team: string
  room: string
  phone: string
  email: string
  errMsg: boolean = false;
  errMsgFirstName: string;
  errMsgLastName: string;
  errMsgEMail: string;

  constructor(private authenticationService: AuthenticationService, private formBuilder: FormBuilder) {
  
  }

  ngOnDestroy(): void {
  }
  ngOnInit() {
    //this.ShowConsoleMessages && console.log('%cLogin.Init', 'background-color:green;color:white;');
    this.registrationForm = this.formBuilder.group({
      ern: '',
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      title: '',
      team: '',
      room: '',
      phone: '',
      email: ''
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.registrationForm.controls; }

  takenemails = ["john.doe@helloworld.com"]

  onSubmit() {
    this.submitted = true;
    this.email = this.f['email'].value;

    if (this.registrationForm.invalid) {
      const nullErrorMessage = "A required field is empty"
      this.errMsgFirstName = nullErrorMessage
      this.errMsgLastName = nullErrorMessage
      this.errMsg = true;
    }
    else if (this.email in this.takenemails){
      const duplicateErrorMessage = "Username \"" + this.email + "\" is already taken."
      this.errMsgEMail = duplicateErrorMessage
      this.errMsg = true
    } 
    // else{
    //   this.spinnerResourcesLoaded = true;
    //   this.authenticationService.login(this.username, this.password)
    //       .pipe(first())
    //       .subscribe(
    //           data => {                
    //             setTimeout(() => {
    //               this.spinnerResourcesLoaded = false;
    //               this.router.navigate(['/']);
    //             }, 2000);
    //           },
    //           error => {
    //             this.ShowConsoleMessages && console.log('%cLoginComponent.onSubmit.ERR','background-color:red;color:white;', error);
    //             const defaultErrorMessage = "Login Error !!!";
                
    //             if(error instanceof HttpErrorResponse) {
    //               this.ShowConsoleMessages && console.log('%cHttpErrorResponse','background-color:red;color:white;',error);
    //               this.errMsgPwd = error.error.message ? error.error.message : (error.statusText ? error.statusText : defaultErrorMessage);
    //             } else {
    //               this.ShowConsoleMessages && console.log('%cOther','background-color:red;color:white;',error);
    //               this.errMsgPwd = error.error.message ? error.error.message : (error.statusText ? error.statusText : defaultErrorMessage);
    //             }
    //             this.errMsgUsername = defaultErrorMessage;
    //             this.errMsg = true;
    //             this.spinnerResourcesLoaded = false;
    //           });
    // }      
  }

}
