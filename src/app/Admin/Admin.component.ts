import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-Admin",
  templateUrl: "./Admin.component.html",
  styleUrls: ["./Admin.component.css"]
})
export class AdminComponent implements OnInit {
  constructor() {}

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
}
