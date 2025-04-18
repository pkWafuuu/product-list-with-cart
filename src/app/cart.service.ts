import { Injectable } from '@angular/core';
import { iFood } from './app.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: iFood[] = [];
  private orders: iFood[] = [];
  private cartSubject = new BehaviorSubject<iFood[]>(this.cart);

  constructor() { }

  getCartObservable() {
    return this.cartSubject.asObservable();
  }

  add(food: iFood){
    this.cart.push(food)
    this.totalItemPrice(food)
    this.cartSubject.next([...this.cart]);
    console.log('added' + food.name)
  }

  delete(food: iFood){
    this.cart = this.cart.filter(f => f !== food)
    this.cartSubject.next([...this.cart]);
  }

  increment(food: iFood) {
    if (food.quantity === undefined) {
      food.quantity = 1;
    }
    food.quantity++;
    this.totalItemPrice(food).toFixed(2)
    console.log('incremented ' + food.name + ' to ' + food.quantity)
  }

  decrement(food: iFood) {
    if (food.quantity === undefined) {
      food.quantity = 1;
    }
    food.quantity--;
    this.totalItemPrice(food).toFixed(2)
    console.log('incremented ' + food.name + ' to ' + food.quantity)
  }

  totalItemPrice(food: iFood){
    return food.totalPrice = food.price * (food.quantity || 1)
  }

  emptyCart(){
    this.cart = [];
    this.cartSubject.next([...this.cart]);
  }

  addToOrders(food:iFood[]){
    this.orders.push(...food.map(f => ({ ...f })));
    console.log(this.orders)
    this.emptyCart()
  }

  getOrders(): iFood[] {
    return this.orders;
  }

  getCart(): iFood[] {
    return this.cart;
  }
}
