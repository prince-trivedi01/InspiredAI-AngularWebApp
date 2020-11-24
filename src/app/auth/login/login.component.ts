import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  type: string;
  icon: string = 'visibility';
  constructor(
    private auth: AngularFireAuth,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.type = 'password';
  }

  onsignup(form: NgForm) {
    this.auth
      .signInWithEmailAndPassword(form.value.email, form.value.password)
      .then((re) => {
        console.log(re, 'Success');
        this.snackbar.open('Login Successfully !!', 'Dismiss', {
          duration: 3000,
        });
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        console.log(err.message);
        this.snackbar.open(err.message, 'Dismiss', {
          duration: 3000,
        });
      });
  }
  googleSignIn() {
    this.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then((re) => {
        console.log(re);
        this.snackbar.open('Login Successfully !!', 'Dismiss', {
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
  RecoveryPassword() {
    console.log('Password Reset');
  }
  show(type: string) {
    if (type === 'password') {
      this.type = 'text';
      this.icon = 'visibility_off';
    } else {
      this.type = 'password';
      this.icon = 'visibility';
    }
  }
}
