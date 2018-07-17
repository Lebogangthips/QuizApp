import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';

import { Level1Page } from '../level1/level1';



/**
 * Generated class for the CatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cat',
  templateUrl: 'cat.html',
})
export class CatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatPage');
  }

  Start(){
    this.navCtrl.push(Level1Page)
  }




}
