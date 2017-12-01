import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';

//Providers
import { AlertProvider } from '../../providers/alert';
import { CarManagerProvider } from '../../providers/managers/car-manager';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private alert: AlertProvider,
    private _car_manager: CarManagerProvider,

  ) {
  }

  ionViewDidLoad() {
    this.loadCars();    
  }

  private loadCars(){
    let loader = this.loadingCtrl.create({
      content: 'Loading cars...'
    });

    loader.present();

    this._car_manager.getCars().subscribe(
      ()  => {
        loader.dismiss()
        this.alert.showAlert('Cars loaded successfully', 'info');
      },
      (error) => {
        loader.dismiss();

        this.alert.showAlert('There was an error loading the cars: ' + error, 'danger');
      }
    );
  }

}
