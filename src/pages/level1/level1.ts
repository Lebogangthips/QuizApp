import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { CatPage } from '../../pages/cat/cat';
import { Level2Page } from '../level2/level2';

/**
 * Generated class for the Level1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-level1',
  templateUrl: 'level1.html',
})
export class Level1Page {

  Ql ;
  Q2 ;
  Q3 ;
  Q4 ;
  Q5 ;

  score =0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Level1Page');
  }


  Submit(){
  
    if (this.Ql == "200barrels"){
      this.score =this.score + 10 ;
      console.log(this.Ql);
            
      console.log(this.score);
            
      

}

if (this.Q2 == "36"){
this.score =this.score + 10 ;
console.log(this.Q2);
      
console.log(this.score);
      
}


if (this.Q3 == "v=9"){
this.score =this.score + 10 ;
console.log(this.Q3);
            
console.log(this.score);
            
}

if (this.Q4 == "150"){
this.score =this.score + 10 ;
console.log(this.Q4);
                  
console.log(this.score);
                  
}

if (this.Q5 == "156"){
this.score =this.score + 10 ;
console.log(this.Q5);
                        
console.log(this.score);
if (this.score == 50){



  
  this.navCtrl.push(Level2Page)

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
    this.score < 50;
    this.Ql = 0;
    this.Q2 = 0;
    this.Q3 = 0;
    this.Q4 = 0;
    this.Q5 = 0;


  }

  this.navCtrl.push(Level1Page)

  const alert = this.alertCtrl.create({
    title: 'Opps!',
    subTitle: 'Youre score is ' + this.score + ' please try again.' ,
    buttons: ['Retry']
  });
  alert.present();
}

  
}



}


 


 


