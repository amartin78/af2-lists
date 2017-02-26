import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyCB4rGwgbMUVEUq0IlT0vvtlaUoBhX-wlk",
  authDomain: "angularfire2-list-exampl-59280.firebaseapp.com",
  databaseURL: "https://angularfire2-list-exampl-59280.firebaseio.com",
  storageBucket: "angularfire2-list-exampl-59280.appspot.com",
  messagingSenderId: "262992764747"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}


