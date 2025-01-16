import { Component, EventEmitter, Input, Output } from '@angular/core';
import { iFood } from '../../app.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.css'
})
export class OrderConfirmationComponent {
  @Input() cart: iFood[] = [];
  @Input() totalCartPrice! : number;
  @Input() totalItemPrice! : number;
  @Output() orderConfirmed = new EventEmitter();

  constructor(private cartSvc: CartService) {}

  closeOrder() {
    this.cartSvc.emptyCart();
    this.orderConfirmed.emit();
  }
}
