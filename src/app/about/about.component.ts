import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  products = products;

}
