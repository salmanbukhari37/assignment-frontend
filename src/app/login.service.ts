import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

import { Http, Headers } from "@angular/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private _http: Http, private _router: Router) {}
  errorMessage = "";

  // login(data) {
  //   var header = new Headers();
  //   header.append("Content-Type", "application/json");

  //   // console.log(data);

  //   return this._http.post("http://localhost:5000/login", data).pipe(
  //     map(result => {
  //       result.json();

  //       // if (tokens != "" && tokens.token) {
  //       //   localStorage.setItem("access_token", tokens.token);
  //       //   this._router.navigate(["admin"]);
  //       // } else {
  //       //   result.json();
  //       // }
  //     })
  //   );
  // }

  login(data) {
    var header = new Headers();
    header.append("Content-Type", "application/json");

    return this._http
      .post("http://localhost:5000/login", data)
      .pipe(map(res => res.json()));
  }

  logout() {
    localStorage.removeItem("access_token");
  }

  public get loggedIn(): Boolean {
    return localStorage.getItem("access_token") !== null;
  }
}
