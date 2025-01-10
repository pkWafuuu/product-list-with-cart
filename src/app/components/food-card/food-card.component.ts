import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iFood } from '../../app.model';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-food-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.css'
})
export class FoodCardComponent {
  @Input() food!: iFood;
  
  constructor(private cartSvc:CartService) {}

  getCart() {
    return this.cartSvc.getCart().some(food => food.name === this.food.name);
  }

  addToCart(food: iFood) {
    this.cartSvc.add(food);
    this.increment(food)
  }

  increment(food: iFood) {
    this.cartSvc.increment(food)
  }

  decrement(food: iFood) {
    this.cartSvc.decrement(food)
    if (food.quantity === 0) {
      this.deleteItem(food)
    }
  }

  deleteItem(food: iFood) {
    food.quantity = 0;
    this.cartSvc.delete(food)
  }
}
