import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { LoginService } from "./login.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "assignment-frontend";

  constructor(private _router: Router, private _auth: LoginService) {}

  firstname = "";
  username = "";

  ngOnInit() {
    if (
      localStorage.getItem("username") &&
      localStorage.getItem("first_name")
    ) {
      this.firstname = localStorage.getItem("first_name");
      this.username = localStorage.getItem("username");
    }
  }

  Logout() {
    window.localStorage.removeItem("access_token");
    this._router.navigate(["login"]);
  }
}
