import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { CatPage } from '../pages/cat/cat';
import { Level1Page } from '../pages/level1/level1';

import { Level2Page } from '../pages/level2/level2';
import { Level3Page } from '../pages/level3/level3'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CatPage,
    Level1Page,
    Level2Page,
    Level3Page, 
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CatPage,
    Level1Page,
    Level2Page,
    Level3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
