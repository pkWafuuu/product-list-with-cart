import { Component } from '@angular/core';
import { iFood } from '../../app.model';
import { CartService } from '../../cart.service';
import { CommonModule } from '@angular/common';
import { OrderConfirmationComponent } from "../order-confirmation/order-confirmation.component";

@Component({
  selector: 'app-food-cart',
  standalone: true,
  imports: [CommonModule, OrderConfirmationComponent],
  templateUrl: './food-cart.component.html',
  styleUrl: './food-cart.component.css'
})
export class FoodCartComponent {
  cart: iFood[] = [];
  clicked: boolean = false;

  
  constructor(private cartSvc: CartService){}

  ngOnInit() {
    this.cartSvc.getCartObservable().subscribe(cart => {
      this.cart = cart;
    });
  }

  deleteItem(food: iFood) {
    this.cartSvc.delete(food)
  }

  getTotalItems(): number {
    return this.cart.reduce((total, food) => total + (food.quantity || 0), 0);
  }

  getTotalCart(): number {
    return this.cart.reduce((total, food) => total + (food.totalPrice || 0), 0)
  }

  confirmOrder(){
    this.clicked = !this.clicked;
  }
}
