import { Component, OnInit } from '@angular/core';
import { itemShop } from 'src/app/models/itemShop.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  itemsShop: itemShop[]=[
    {
      id: '1',
      name: 'cafe',
      stock: 5,
      imageUrl: '',
      price: 200
    },
    {
      id: '2',
      name: 'dona',
      stock: 5,
      imageUrl: '',
      price: 400
    },
    {
      id: '3',
      name: 'empanada',
      stock: 5,
      imageUrl: '',
      price: 500
    },
    {
      id: '4',
      name: 'muffin',
      stock: 5,
      imageUrl: '',
      price: 300
    },
    {
      id: '5',
      name: 'medialuna',
      stock: 5,
      imageUrl: '',
      price: 500
    },
    {
      id: '6',
      name: 'hallula',
      stock: 5,
      imageUrl: '',
      price: 600
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
