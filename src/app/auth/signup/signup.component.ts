import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  loginForm: FormGroup;

  error_messages = {
    fname: [{ type: 'required', message: 'Name is required.' }],

    phoneNumber: [
      { type: 'required', message: 'Phone Number is required.' },
      { type: 'minlength', message: 'Phone Number length.' },
      { type: 'maxlength', message: 'Phone Number length.' },
    ],

    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'minlength', message: 'Email length.' },
      { type: 'maxlength', message: 'Email length.' },
      { type: 'required', message: 'Please enter a valid email address.' },
    ],

    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Minimum Password length is 6.' },
      { type: 'maxlength', message: 'Maximum Password length is 30.' },
    ],
    confirmpassword: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Minimum Password length is 6.' },
      { type: 'maxlength', message: 'Maximum Password length is 30.' },
    ],
  };

  constructor(
    public formBuilder: FormBuilder,
    private auth: AngularFireAuth,
    private snackbar: MatSnackBar,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group(
      {
        fname: new FormControl('', Validators.compose([Validators.required])),
        phoneNumber: new FormControl(
          '',
          Validators.compose([Validators.required])
        ),
        email: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30),
          ])
        ),
        password: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30),
          ])
        ),
        confirmpassword: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30),
          ])
        ),
      },
      {
        validators: this.password.bind(this),
      }
    );
  }

  ngOnInit(): void {}

  onsignup(form: NgForm) {
    this.auth
      .createUserWithEmailAndPassword(form.value.email, form.value.password)
      .then((re) => {
        console.log(re, 'Success');
        this.snackbar.open('Registered User Successfully !!', 'Dismiss', {
          duration: 3000,
        });
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        console.log(err.message);
        this.snackbar.open(err.message, 'Dismiss', {
          duration: 3000,
        });
        console.log(form.value.email);
      });
  }
  googleSignIn() {
    this.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then((re) => {
        console.log(re);
        this.snackbar.open('Registered User Successfully !!', 'Dismiss', {
          duration: 3000,
        });
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        console.log('failed');
        this.snackbar.open(err.message, 'Dismiss', {
          duration: 3000,
        });
      });
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
  RecoveryPassword() {}
}
