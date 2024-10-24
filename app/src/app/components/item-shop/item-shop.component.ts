import { itemShop } from './../../models/itemShop.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-shop',
  templateUrl: './item-shop.component.html',
  styleUrls: ['./item-shop.component.scss'],
})
export class ItemShopComponent  implements OnInit {

  @Input() itemShop?: itemShop;

  constructor() { }

  ngOnInit() {}

}
