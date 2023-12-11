import { AuthenticationService } from '@_core/services';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  registrationForm = this.formBuilder.group({
    ern: '',
    first_name: '',
    last_name: '',
    title: '',
    team: '',
    room: '',
    phone: '',
    email: ''
  })

  constructor(private authenticationService: AuthenticationService, private formBuilder: FormBuilder) {
  
  }

  ngOnDestroy(): void {
  }
  ngOnInit(): void {
  }
  onSubmit(): void {
    
  }

}
