import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-bill-form',
  standalone: false,
  templateUrl: './bill-form.component.html',
  styleUrls: ['./bill-form.component.css'],
})
export class BillFormComponent {
  customerName: string = '';
  items: Item[] = [
    { id: 1, name: 'samosa', price: 100 },
    { id: 2, name: 'burger', price: 200 },
    { id: 3, name: 'fataya', price: 300 },
    { id: 4, name: 'juice', price: 400 },
  ];
  selectedItem: Item = this.items[0];
  cart: {
    name: string;
    price: number;
    quantity: number;
  }[] = [];

  AddItem() {
    let existingItem = this.cart.find((item) => item.name === this.selectedItem.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({
        ...this.selectedItem,
        quantity: 1,
      });
    }
  }

  removeItem(item: any) {
    this.cart = this.cart.filter((cartItem) => cartItem.name !== item.name);
  }

  grandTotal(): number {
   return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  decreaseQuantity(item: any, qty: number) {
    if (qty > 1) {
      item.quantity = qty - 1;
    }
    if (item.quantity === 1) {
      this.removeItem(item);
    }
    if(item.quantity < 1 ){
      item.quantity = 1;
    }
  }

  increaseQuantity(item: any, qty: number) {
    item.quantity = qty + 1;

    if(item.quantity < 1 ){
      item.quantity = 1;
    }


  }

  constructor() {}

  ngOnInit() {}

  onItemSelect(event: any) {}
}
