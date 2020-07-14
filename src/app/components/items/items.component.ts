import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from 'src/app/services/item-service.service';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  
  items : Item[];
  editState : boolean = false;
  itemToEdit : Item;

  constructor(private itemService : ItemServiceService) { }

  ngOnInit(){
    this.itemService.getItems().subscribe(items => {
      //console.log(items);
      this.items = items;
    });
  }

  editItem(event, item : Item){
    this.editState = true;
    this.itemToEdit = item;
  }

  deleteItem(event,item : Item){
    //call this.clearState to remove the item from context
    this.clearState();
    this.itemService.deleteItem(item);
  }

  updateItem(item : Item){
    this.itemService.updateitem(item);
    this.clearState();
  }

  clearState(){
    this.editState = false;
    this.itemToEdit = null;
  }
}
