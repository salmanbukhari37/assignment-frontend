import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: Http) {}

  // login(username: string, password: string) {
  //   var header = new Headers();
  //   header.append("Content-Type", "application/json");

  //   return this._http
  //     .post("http://localhost:5000/api/reservation/get/one", id)
  //     .pipe(map(res => res.json()));
  // }

  // login(username: string, password: string): Observable<boolean> {
  //   return this.http
  //     .post<{ token: string }>("/api/auth", {
  //       username: username,
  //       password: password
  //     })
  //     .pipe(
  //       map(result => {
  //         localStorage.setItem("access_token", result.token);
  //         return true;
  //       })
  //     );
  // }
}
