import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightTextDirective } from '../highlight-text.directive';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, HighlightTextDirective],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    { name: 'Product A', price: 800 },
    { name: 'Product B', price: 1200 },
    { name: 'Product C', price: 1500 }
  ];
}
