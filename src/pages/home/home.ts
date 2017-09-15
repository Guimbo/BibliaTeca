import { NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userName:string;
  passWord:string;
constructor(public viewCtrl: ViewController, params: NavParams, private alertCtrl: AlertController) {

}
presentAlert() {
  let alert = this.alertCtrl.create({
    cssClass: 'alertMsg',
    title: this.userName,
    subTitle: this.passWord,
    buttons: ['Beleza']
  });
  alert.present();
}
}