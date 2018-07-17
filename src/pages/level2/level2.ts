import { Component, ɵConsole  } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { CatPage } from '../../pages/cat/cat';
import { Level3Page } from '../level3/level3';


/**
 * Generated class for the Level2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-level2',
  templateUrl: 'level2.html',
})
export class Level2Page {

  Ql ;
  Q2 ;
  Q3 ;
  Q4 ;
  Q5 ;

  score =0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Level2Page');
  }


  Submit(){

    if (this.Ql == "Envelope"){
      this.score =this.score + 10 ;
      console.log(this.Ql);
            
      console.log(this.score);
            
      
}

  if (this.Q2 == "Your shadow"){
   this.score =this.score + 10 ;
   console.log(this.Q2);

   console.log(this.score);


  }


  if (this.Q3 == "A coin"){
    this.score =this.score + 10 ;
    console.log(this.Q3);
 
    console.log(this.score);
 
 
   }
 

   if (this.Q4 == "Cards"){
    this.score =this.score + 10 ;
    console.log(this.Q4);
 
    console.log(this.score);
 
 
   } 


   if (this.Q5 == "12 years"){
    this.score =this.score + 10 ;
    console.log(this.Q5);
 
    console.log(this.score);
    if (this.score == 50)
 

    {

  
      this.navCtrl.push(Level3Page)
    
      const alert = this.alertCtrl.create({
        title: 'Yey!',
        subTitle: 'Your score is ' + this.score + ' You have passed. Continue to the next level.',
        buttons: ['Continue']
      });
      alert.present();
    }
 
   } 

   else{

    if(this.score < 50){
      this.score < 0;
      this.Ql = 0;
      this.Q2 = 0;
      this.Q3 = 0;
      this.Q4 = 0;
      this.Q5 = 0;
  
    }
  
    this.navCtrl.push(Level2Page)
  
    const alert = this.alertCtrl.create({
      title: 'Opps!',
      subTitle: 'Youre score is ' + this.score + ' please try again.' ,
      buttons: ['Retry']
    });
    alert.present();
  }

  }
  
  
}
  


