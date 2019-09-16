import { MyCar } from "./MyCar";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CarService } from "../car.service";

@Component({
  selector: "app-AddCar",
  templateUrl: "./AddCar.component.html",
  styleUrls: ["./AddCar.component.css"]
})
export class AddCarComponent implements OnInit {
  cars: MyCar[];

  public carBrandArray = [
    "Toyota",
    "Honda",
    "Farrari",
    "BMW",
    "Audy",
    "Hyundai"
  ];

  public carColorArray = ["Golden", "Red", "Black", "Green", "Blue", "Purple"];
  public carModelArray = [
    "XLI",
    "Civic",
    "LaFarrari",
    "BMW X6",
    "AU055",
    "HY4122"
  ];

  public carBodyArray = ["Convertable", "SUV", "Coupe"];
  public carFuelTypeArray = ["Petrol", "Gas"];

  constructor(private _carService: CarService) {}

  ngOnInit() {
    this._carService.GetAllCars().subscribe(res => {
      this.cars = res;
    });
  }
  addButtonIsActive = 1;
  editId = "";
  index = "";

  pageName = "Car Form";

  addCarForm = new FormGroup({
    carBrand: new FormControl("", Validators.required),
    carModel: new FormControl("", Validators.required),
    carColor: new FormControl("", Validators.required),
    engineSize: new FormControl("", Validators.required),
    productionYear: new FormControl("", Validators.required),
    registrationNumber: new FormControl("", Validators.required),
    fuelType: new FormControl("", Validators.required),
    mileage: new FormControl("", Validators.required),
    bodyType: new FormControl("", Validators.required)
  });

  // Getters
  get carBrand() {
    return this.addCarForm.get("carBrand");
  }

  get carModel() {
    return this.addCarForm.get("carModel");
  }

  get carColor() {
    return this.addCarForm.get("carColor");
  }

  get engineSize() {
    return this.addCarForm.get("engineSize");
  }

  get productionYear() {
    return this.addCarForm.get("productionYear");
  }

  get registrationNumber() {
    return this.addCarForm.get("registrationNumber");
  }

  get fuelType() {
    return this.addCarForm.get("fuelType");
  }

  get mileage() {
    return this.addCarForm.get("mileage");
  }

  get bodyType() {
    return this.addCarForm.get("bodyType");
  }

  AddCar(data) {
    let newCar = {
      carData: {
        CarBrand: data.carBrand,
        CarModel: data.carModel,
        Color: data.carColor,
        EngineSize: data.engineSize,
        ProductionYear: data.productionYear,
        RegistrationNumber: data.registrationNumber,
        Mileage: data.mileage,
        FuelType: data.fuelType,
        BodyType: data.bodyType
      }
    };

    // console.log(newCar);
    // return false;

    this._carService.AddCar(newCar).subscribe(result => {
      this.cars.push(result);
      this.addCarForm.reset();
    });
  }

  EditCar(index, actualId) {
    this.addButtonIsActive = 0;
    this.index = index;

    this.addCarForm.get("carBrand").setValue(this.cars[index].CarBrand);
    this.addCarForm.get("carModel").setValue(this.cars[index].CarModel);
    this.addCarForm.get("carColor").setValue(this.cars[index].Color);
    this.addCarForm.get("engineSize").setValue(this.cars[index].EngineSize);
    this.addCarForm
      .get("productionYear")
      .setValue(this.cars[index].ProductionYear);

    this.addCarForm
      .get("registrationNumber")
      .setValue(this.cars[index].RegistrationNumber);

    this.addCarForm.get("fuelType").setValue(this.cars[index].FuelType);
    this.addCarForm.get("mileage").setValue(this.cars[index].Mileage);

    this.addCarForm.get("bodyType").setValue(this.cars[index].BodyType);

    this.editId = actualId;
  }

  UpdateCar(form) {
    var data = {
      id: this.editId,
      carData: {
        CarBrand: form.carBrand,
        CarModel: form.carModel,
        Color: form.carColor,
        EngineSize: form.engineSize,
        ProductionYear: form.productionYear,
        RegistrationNumber: form.registrationNumber,
        FuelType: form.fuelType,
        Mileage: form.mileage,
        BodyType: form.bodyType
      }
    };

    this.cars[this.index].CarBrand = form.carBrand;
    this.cars[this.index].CarModel = form.carModel;
    this.cars[this.index].CarColor = form.carColor;
    this.cars[this.index].EngineSize = form.engineSize;
    this.cars[this.index].ProductionYear = form.productionYear;
    this.cars[this.index].RegistrationNumber = form.registrationNumber;
    this.cars[this.index].FuelType = form.fuelType;
    this.cars[this.index].Mileage = form.mileage;
    this.cars[this.index].BodyType = form.bodyType;

    this._carService.UpdateCar(data).subscribe(result => {
      this.addCarForm.reset();
      this.addButtonIsActive = 1;
    });
  }
  DeleteCar(index, id) {
    this._carService.DeleteCar(id).subscribe(res => {
      this.singleArrayRemove(this.cars, index);
    });
  }

  singleArrayRemove(array, index) {
    if (index > -1) array.splice(index, 1);
    return array;
  }
}
