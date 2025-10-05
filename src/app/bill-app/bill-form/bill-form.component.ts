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

  removeItem(index: number) {
    this.cart.splice(index, 1);
  }

  getTotal(): number {
    let total = 0;
    this.cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }



  constructor() {}

  ngOnInit() {}

  onItemSelect(event: any) {}
}
