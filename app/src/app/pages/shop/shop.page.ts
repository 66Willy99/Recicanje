import { Component, OnInit } from '@angular/core';
import { itemShop } from 'src/app/models/itemShop.model';
import { ChangeDetectorRef } from '@angular/core';
import { AlertController } from '@ionic/angular';  // Importar AlertController
import QRCode from 'qrcode';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  itemsShop: itemShop[] = [
    {
      uid: '1',
      name: 'cafe',
      stock: 5,
      imageUrl: 'https://tofuu.getjusto.com/orioneat-local/resized2/PnS4KYYj75HL5co8A-1200-1200.webp',
      price: 200,
    },
    {
      uid: '2',
      name: 'dona',
      stock: 5,
      imageUrl: 'https://buenprovecho.hn/wp-content/uploads/2019/06/iStock-624745020-1.jpg',
      price: 400
    },
    {
      uid: '3',
      name: 'empanada',
      stock: 5,
      imageUrl: 'https://lanuevamendez.cl/wp-content/uploads/2021/06/IMG_0153.jpeg',
      price: 500
    },
    {
      uid: '4',
      name: 'muffin',
      stock: 5,
      imageUrl: 'https://bakingwithbutter.com/wp-content/uploads/2022/08/6-blueberry-muffins-1-720x720.jpg',
      price: 300
    },
    {
      uid: '5',
      name: 'medialuna',
      stock: 5,
      imageUrl: 'https://assets.elgourmet.com/wp-content/uploads/2011/09/shutterstock_1366373012-1024x683.jpg.webp',
      price: 500
    },
    {
      uid: '6',
      name: 'hallula',
      stock: 5,
      imageUrl: 'https://dailyfresh.cl/cdn/shop/files/hallullajamonqueso.jpg?v=1700499925&width=1445',
      price: 600
    }
  ];

  money: number = 9999;
  // qrCodeData: string = '';
  qrCodeData: string | null = null;

  constructor(
    private cdr: ChangeDetectorRef,
    private alertController: AlertController,  // Inyectar AlertController
    private navCtrl: NavController,
  ) {}

  
  ngOnInit() {}
  
  // Funcion de obtener productosd de la base de datos
  // getProducts(): Observable<itemShop[]> {
  //   return this.db.list(this.dbPath).snapshotChanges().pipe(
  //     map(changes =>
  //       changes.map(c => {
  //         const productData = c.payload.val() as itemShop;
  //         return {
  //           ...productData,
  //           id: c.payload.key ?? ''
  //         };
  //       })
  //     )
  //   );
  // }

  async confirmarCompra(precio: number, productId: string) {
    const alert = await this.alertController.create({
      header: 'Confirmación de compra',
      message: `¿Estás seguro de que deseas comprar este producto por ${precio} puntos?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Compra cancelada.');
          }
        },
        {
          text: 'Comprar',
          handler: () => {
            this.Comprar(precio, productId); // se agrego el productId para saber que producto esta comprando el usuario
            alert.dismiss();
          }
        }
      ]
    });
    await alert.present();
  }

  async Comprar(precio: number, productId: string) {
    const item = this.itemsShop.find(item => item.uid === productId);
    if (item && this.money >= precio && item.stock > 0) {
      this.money -= precio;
      item.stock -= 1;
      console.log(`Compra realizada. Puntos restantes: ${this.money}`);
      const date = new Date().toISOString();
      const data = {
        date: date,
        id: productId,
        unit: 1
      };
      const qrCodeUrl = await this.generateQRCode(JSON.stringify(data));
      console.log('QR Code URL:', qrCodeUrl); // Verificación de la URL del código QR
      const qrAlert = await this.alertController.create({
        header: 'Código QR',
        message: `<img src="${qrCodeUrl}" alt="photo" />`,
        buttons: ['OK']
      });
      console.log('QR Alert Message:', qrAlert.message); // Verificación del contenido del mensaje
      await qrAlert.present();
    } else {
      console.log("No tienes suficientes puntos para canjear este producto o el producto no existe.");
    }
  }

  generateQRCode(data: string): Promise<string> {
    return new Promise((resolve, reject) => {
      QRCode.toDataURL(data, (err: Error | null, url: string | undefined) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(url || '');
        }
      });
    });
  }
  goHome(){
    this.navCtrl.navigateBack('/home');
  }

}
