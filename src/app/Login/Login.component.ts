import { LoginService } from "./../login.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { log } from "util";
import { Router } from "@angular/router";
@Component({
  selector: "app-Login",
  templateUrl: "./Login.component.html",
  styleUrls: ["./Login.component.css"]
})
export class LoginComponent implements OnInit {
  login = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", Validators.required)
  });

  // Getters
  get username() {
    return this.login.get("username");
  }

  // Getters
  get password() {
    return this.login.get("password");
  }
  constructor(private _loginService: LoginService, private router: Router) {}
  message = "";

  ngOnInit() {}

  UserLogin() {
    let loginData = {
      loginCredentials: {
        password: this.login.value.password,
        username: this.login.value.username
      }
    };

    this._loginService.login(loginData).subscribe(result => {
      console.log(result);

      if (result.msg) {
        this.message = result;
      } else if (result.token) {
        localStorage.setItem("first_name", result.result.FirstName);
        localStorage.setItem("username", result.result.Username);
        localStorage.setItem("access_token", result.token);

        this.router.navigate(["admin"]);
        console.log("jhey");
      }
    });
  }
}
