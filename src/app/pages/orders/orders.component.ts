import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GeneralTableComponent } from '../../components/general-table/general-table.component';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, GeneralTableComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  constructor(private cartSvc: CartService) {}
  
  orderHeaders = ['Product', 'Price','Quantity','Total'];
  orderData: any[] = []
  
  ngOnInit(): void {
    const orders = this.cartSvc.getOrders();
    
    this.orderData = orders.map(item => ({
      Product: item.name,
      Price: item.price,
      Quantity: item.quantity ?? 1,
      Total: item.totalPrice ?? item.price * (item.quantity ?? 1)
    }));
  }}
