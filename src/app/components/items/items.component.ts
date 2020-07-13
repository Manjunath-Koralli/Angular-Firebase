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
  constructor(private itemService : ItemServiceService) { }

  ngOnInit(){
    this.itemService.getItems().subscribe(items => {
      //console.log(items);
      this.items = items;
    });

  }

  




}
