import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// <script src="https://www.gstatic.com/firebasejs/3.6.10/firebase.js"></script>

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyCHaZ17tKeJ8hx_U0kRhOlrsCMsxPQ5ImE",
  authDomain: "af2-lists-5fc63.firebaseapp.com",
  databaseURL: "https://af2-lists-5fc63.firebaseio.com",
  storageBucket: "af2-lists-5fc63.appspot.com",
  messagingSenderId: "4354139246"
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


