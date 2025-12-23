import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directive-sample',
  templateUrl: './directive-sample.component.html',
  styleUrl: './directive-sample.component.css'
})
export class DirectiveSampleComponent {
  num: number;
  colors: string[];
  products:Product[];
  selectedColor:string='red';
  Id:string|undefined;
  Name:string|undefined;
City:string|undefined;
  Country:string|undefined;
  

  constructor(private activatedRoute:ActivatedRoute)
  {
    this.num =0;
    this.colors=["Red", "Blue", "Green"];

    let p1= new Product(101, 'Pencil', 'P101', 2);
    let p2= new Product(102, 'Pen', 'P102', 10);
    let p3= new Product(103, 'Bag', 'P103', 200);
    this.products=[];
this.products.push(p1);
this.products.push(p2);
this.products.push(p3);
this.activatedRoute.params.subscribe(data=>{this.Name=data['name']});
this.activatedRoute.queryParams.subscribe(data=>
  {
    this.City=data['city'];
    this.Country=data['country'];

  })
  }

  addNewProduct()
  {
    let p4= new Product(104, 'Box', 'P104', 50);
    this.products.push(p4);
  }

    callAlert()
{    alert('This is an alert message!');
  }
}

