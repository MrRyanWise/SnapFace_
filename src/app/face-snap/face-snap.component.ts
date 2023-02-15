import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
    @Input() faceSnap!: FaceSnap; //on injecte l'instance de FaceSnap

    title!: string;
    description!: string;
    createdDate!: Date;
    snaps!: number;
    imageUrl!: string;
    buttonText!: string;


    ngOnInit() {
      this.title = "Archibald";
      this.description="Mon meilleur ami depuis tout petit !";
      this.createdDate = new Date();
      this.snaps = 6;
      this.imageUrl = "./assets/lo1.jpg";
      this.buttonText="Oh Snap";
    }

    onSnap(){
      if( this.buttonText==="Oh Snap" ){
         this.snaps++;
         this.buttonText="Ooops Snap";
      }else{
          this.snaps--;
          this.buttonText="Oh Snap";
      }
    }
}
