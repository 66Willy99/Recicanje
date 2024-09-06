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
      imageUrl: 'https://tofuu.getjusto.com/orioneat-local/resized2/PnS4KYYj75HL5co8A-1200-1200.webp',
      price: 200
    },
    {
      id: '2',
      name: 'dona',
      stock: 5,
      imageUrl: 'https://buenprovecho.hn/wp-content/uploads/2019/06/iStock-624745020-1.jpg',
      price: 400
    },
    {
      id: '3',
      name: 'empanada',
      stock: 5,
      imageUrl: 'https://lanuevamendez.cl/wp-content/uploads/2021/06/IMG_0153.jpeg',
      price: 500
    },
    {
      id: '4',
      name: 'muffin',
      stock: 5,
      imageUrl: 'https://bakingwithbutter.com/wp-content/uploads/2022/08/6-blueberry-muffins-1-720x720.jpg',
      price: 300
    },
    {
      id: '5',
      name: 'medialuna',
      stock: 5,
      imageUrl: 'https://assets.elgourmet.com/wp-content/uploads/2011/09/shutterstock_1366373012-1024x683.jpg.webp',
      price: 500
    },
    {
      id: '6',
      name: 'hallula',
      stock: 5,
      imageUrl: 'https://dailyfresh.cl/cdn/shop/files/hallullajamonqueso.jpg?v=1700499925&width=1445',
      price: 600
    }
  ]


  money = 9999

  constructor() { }

  ngOnInit() {
  }

  Comprar(precio: number){
    console.log(precio);
  }
}
