import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { API } from '../../config/Constants';

//Models
import { Car } from '../../models/index.models';

@Injectable()
export class CarManagerProvider {

  private options:RequestOptions;

  public cars:any[];
  public isLoading:boolean;

  constructor(public http: Http) {
    this.cars = [];

    this.options = new RequestOptions({});
  }

  getCars(){
      this.cars = [];;
      
      let url:string = API.BASE_URL+'/cars';
    
      return this.http.get(url).map(res => {
          for(let currentCar of res.json()){
            let car = new Car(currentCar);
            this.cars.push(car);
          }
        }
    );
  }

}
