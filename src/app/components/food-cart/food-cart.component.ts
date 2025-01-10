import { Component } from '@angular/core';
import { iFood } from '../../app.model';
import { CartService } from '../../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-cart.component.html',
  styleUrl: './food-cart.component.css'
})
export class FoodCartComponent {
  cart: iFood[] = [];

  constructor(private cartSvc: CartService){}

  ngOnInit() {
    this.cartSvc.getCartObservable().subscribe(cart => {
      this.cart = cart; // Updates whenever the cart changes
    });
  }

  deleteItem(food: iFood) {
    this.cartSvc.delete(food)
  }

  getTotalFoodPrice(food: iFood) {
    return food.price * (food.quantity || 1)
  }

  getTotalItems(): number {
    return this.cart.reduce((total, food) => total + (food.quantity || 0), 0);
  }

  getTotalCart(): number {
    return this.cart.reduce((total, food) => total + this.getTotalFoodPrice(food), 0)
  }
}
