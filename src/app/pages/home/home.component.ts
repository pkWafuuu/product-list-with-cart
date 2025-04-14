import { Component } from '@angular/core';
import { GeneralTableComponent } from "../../components/general-table/general-table.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GeneralTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  homeHeaders = ['Names', 'Choice'];
  homeData = [
    { Names: 'Mostafa Radwan', Choice: 'Yes' },
    { Names: 'Phil Oaferina', Choice: 'Yes' },
    { Names: 'Fam Kerolos', Choice: 'No'},
    { Names: 'Albert', Choice: 'No'},
  ];

}
