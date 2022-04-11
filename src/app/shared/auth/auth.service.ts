import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from 'firebase/app'
import { Observable } from "rxjs";
import { ApiService } from "app/services/api.service";

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(
    public _firebaseAuth: AngularFireAuth,
    public router: Router,
    public http: ApiService
  ) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe((user) => {
      if (user) {
        this.userDetails = user;
      } else {
        this.userDetails = null;
      }
    });
  }

  signupUser(email: string, password: string) {
    //your code for signing up the new user
  }

  signinUser(email: string, password: string) {
    //your code for checking credentials and getting tokens for for signing in user
    // return this._firebaseAuth.signInWithEmailAndPassword(email, password)

    //uncomment above firebase auth code and remove this temp code
    // return new Promise(function(resolve, reject) {
    //   setTimeout(function() {
    //     resolve(true);
    //   }, 1000);
    // });
    var httpoptions = {
      header: new HttpHeaders({ responseType: "text" as "json" }),
    };
    var req = {
      userName: email,
      password: password,
    };
    return this.http.post("authenticate", req);
  }

  logout() {
    this._firebaseAuth.signOut();
    this.router.navigate(["/login"]);
  }

  isAuthenticated() {
    return true;
  }
  forLocalstorage() {
    let token = localStorage.getItem("token");
    return "Bearer " + token;
  }
}
