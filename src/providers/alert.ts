import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class AlertProvider {

  constructor(
    private toastCtrl: ToastController,
  ) {
  }

  public showAlert(message:string = '', type:string = 'default', duration:number = 5000){
    let options:any = {
      message: message,
      duration: duration
    };

    switch(type){
      case 'success':
        options.cssClass = 'toastSuccess';
      break;

      case 'info':
        options.cssClass = 'toastInfo';
      break;

      case 'warning':
        options.cssClass = 'toastWarning';
      break;

      case 'danger':
        options.cssClass = 'toastDanger';
      break;

      default:
      break;
    }

    this.toastCtrl.create(options).present();
  }
}
