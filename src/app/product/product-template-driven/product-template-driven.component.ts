import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-template-driven',
  templateUrl: './product-template-driven.component.html',
  styleUrl: './product-template-driven.component.css'
})
export class ProductTemplateDrivenComponent {
product:Product;

constructor()
{
  this.product= new Product();
}

saveProduct(frm:NgForm)
{
if(frm.valid)
{
alert("Product saved successfully");
}
else
{
alert("validation error");
}
}
}
