import {Component, OnInit} from '@angular/core';
import { FaceSnap } from "./models/face-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    mySnap!: FaceSnap;
    myOtherSnap!: FaceSnap;
    myLastSnap!: FaceSnap;

    ngOnInit(){
      this.mySnap =  {
        title : 'Archibald',
        description :'Mon meilleur ami depuis tout petit !',
        imageUrl: './assets/lo1.jpg',
        createdDate: new Date(),
        snaps: 0,
        location:"string"
      };

      this.myOtherSnap =  {
        title : 'myOtherSnap',
        description :'Mon meilleur ami depuis tout petit !',
        imageUrl: './assets/lo1.jpg',
        createdDate: new Date(),
        snaps: 0,
        location:"string"
      };

      this.myLastSnap =  {
        title : 'myLastSnap',
        description :'Mon meilleur ami depuis tout petit !',
        imageUrl: './assets/lo1.jpg',
        createdDate: new Date(),
        snaps: 0,
        location:"string"
      };


    }
}
