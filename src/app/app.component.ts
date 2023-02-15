import {Component, OnInit} from '@angular/core';
import { FaceSnap } from "./models/face-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    faceSnaps!: FaceSnap[];

    ngOnInit(){
      this.faceSnaps =[
        {
          title : 'Archibald',
          description :'Mon meilleur ami depuis tout petit !',
          imageUrl: './assets/lo1.jpg',
          createdDate: new Date(),
          snaps: 100,
          location:"Paris"
        },
        {
          title : 'RedShield',
          description :'Mon meilleur ami depuis tout petit !',
          imageUrl: './assets/lo2.jpg',
          createdDate: new Date(),
          snaps: 0,
          location:"New York"
        },
        {
          title : 'LandScape',
          description :'Mon meilleur ami depuis tout petit !',
          imageUrl: './assets/lo3.jpg',
          createdDate: new Date(),
          snaps: 0
        }
      ];

    }
}
