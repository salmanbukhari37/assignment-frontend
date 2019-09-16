import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CarService {
  constructor(private _http: Http) {}

  GetAllCars() {
    return this._http
      .get("http://localhost:5000/api/car")
      .pipe(map(res => res.json()));
  }

  AddCar(newReservation) {
    var header = new Headers();
    header.append("Content-Type", "application/json");

    return this._http
      .post("http://localhost:5000/api/car", newReservation, {
        headers: header
      })
      .pipe(map(res => res.json()));
  }

  GetCarById(id) {
    var header = new Headers();
    header.append("Content-Type", "application/json");

    return this._http
      .get(`http://localhost:5000/api/car/${id}`)
      .pipe(map(res => res.json()));
  }

  UpdateCar(updateData) {
    var header = new Headers();
    header.append("Content-Type", "application/json");

    return this._http
      .put("http://localhost:5000/api/car", updateData)
      .pipe(map(res => res.json()));
  }

  DeleteCar(id) {
    var header = new Headers();
    header.append("Content-Type", "application/json");

    const options = {
      body: {
        id: id
      }
    };

    return this._http
      .delete("http://localhost:5000/api/car", options)
      .pipe(map(res => res.json()));
  }
}
