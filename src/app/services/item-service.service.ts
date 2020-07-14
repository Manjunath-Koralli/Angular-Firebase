import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,
      AngularFirestoreDocument } from 'angularfire2/firestore';

import { Item } from '../models/Item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {
  
  itemsCollection : AngularFirestoreCollection<Item>;
  items : Observable<Item[]>;
  itemDoc : AngularFirestoreDocument<Item>;

  constructor(private afs : AngularFirestore) { 
    //to insert
    this.itemsCollection = this.afs.collection('items',ref => ref.orderBy('title','asc'));

    //to retrieve

    //this.items = this.afs.collection('items').valueChanges();
    this.items = this.itemsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(a=> {
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        });
      })
      )
  }

  addItem(item : Item){
    this.itemsCollection.add(item);
  }

  deleteItem(item : Item){
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.delete();
  }

  updateitem(item: Item) {
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.update(item);
  }

  getItems() {
    return this.items;
  }
}



