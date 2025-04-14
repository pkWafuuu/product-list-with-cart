import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-general-table',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './general-table.component.html',
  styleUrl: './general-table.component.css'
})

export class GeneralTableComponent {
  @Input() headers: string[] = [];
  @Input() data: any[] = [];
}
