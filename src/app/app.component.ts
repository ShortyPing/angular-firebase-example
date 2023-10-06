import {Component, inject} from '@angular/core';
import {collection, collectionData} from "@angular/fire/firestore";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import firebase from "firebase/compat";
import QuerySnapshot = firebase.firestore.QuerySnapshot;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  data: any = []



  constructor(private firestore: AngularFirestore) {




    const itemCollection = firestore.collection("users").get().subscribe({
      next: v => {
        this.data = v.docs.map(c => c.data())
      }
    });

  }
}
