import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController) { }

  async presentAlert(alertMessage: string) {
    const alert = await this.alertController.create({
      message: alertMessage,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
