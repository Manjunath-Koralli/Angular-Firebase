import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,
      AngularFirestoreDocument } from 'angularfire2/firestore';

//import { Observable } from 'rxjs/Observable';
import { Item } from '../models/Item';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  itemsCollection : AngularFirestoreCollection<Item>;
  items : Observable<Item[]>;

  constructor(private afs : AngularFirestore) { 
    this.items = this.afs.collection('items').valueChanges();
  }

  getItems() {
    return this.items;
  }
}



