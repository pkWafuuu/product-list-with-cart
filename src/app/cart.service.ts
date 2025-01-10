import { Injectable } from '@angular/core';
import { iFood } from './app.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: iFood[] = [];
  private cartSubject = new BehaviorSubject<iFood[]>(this.cart);

  constructor() { }

  getCartObservable() {
    return this.cartSubject.asObservable();
  }

  add(food: iFood){
    this.cart.push(food)
    this.cartSubject.next([...this.cart]);
    console.log('added' + food.name)
  }

  delete(food: iFood){
    this.cart = this.cart.filter(f => f !== food)
    this.cartSubject.next([...this.cart]);
  }

  increment(food: iFood) {
    if (food.quantity === undefined) {
      food.quantity = 0;
    }
    food.quantity++;
    console.log('incremented ' + food.name + ' to ' + food.quantity)
  }

  decrement(food: iFood) {
    if (food.quantity === undefined) {
      food.quantity = 0;
    }
    food.quantity--;
    console.log('incremented ' + food.name + ' to ' + food.quantity)
  }

  getCart(): iFood[] {
    return this.cart;
  }
}
