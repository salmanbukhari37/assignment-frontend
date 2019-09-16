import { HttpModule } from "@angular/http";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";

import { LoginComponent } from "./Login/Login.component";
import { AdminComponent } from "./Admin/Admin.component";
import { HomeComponent } from "./Home/Home.component";
import { AddCarComponent } from "./AddCar/AddCar.component";

import { AppComponent } from "./app.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { JwtModule } from "@auth0/angular-jwt";
import { AuthService } from "./auth.service";
import { LoginService } from "./login.service";
import { AuthguardService } from "./auth.guard";
export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    AddCarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: "login", component: LoginComponent },
      { path: "", component: HomeComponent, canActivate: [AuthguardService] },
      {
        path: "admin",
        component: AdminComponent,
        canActivate: [AuthguardService]
      },
      {
        path: "add-new-car",
        component: AddCarComponent,
        canActivate: [AuthguardService]
      }
    ]),
    // Add this import here
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [AuthService, AuthguardService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
