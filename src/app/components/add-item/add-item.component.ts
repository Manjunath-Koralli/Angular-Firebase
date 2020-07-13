import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from 'src/app/services/item-service.service';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  item : Item = {
    title : '',
    description : ''
  }

  constructor(private itemService : ItemServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.item.title != '' && this.item.description != ''){
      this.itemService.addItem(this.item);
      this.item.title = '';
      this.item.description = '';
    }

  }

}
