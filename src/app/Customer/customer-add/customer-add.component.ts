import { Component, ElementRef, ViewChild } from '@angular/core';
import { CustomerListComponent } from '../customer-list/customer-list.component';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent {

  customerName: string|undefined;
  customers:string[];
@ViewChild('clistcomp')
customerListComp:CustomerListComponent|undefined;

@ViewChild('divMessage')
div: ElementRef|undefined;

  constructor()
  {
    this.customers = [];
  }
  addCustomer()
  {
//this.customers.push(this.customerName??"");
this.customerListComp?.customerList.push(this.customerName??"");
//alert("New Customer Added");
if(this.div!=undefined)
{
this.div.nativeElement.innerText="New Customer Added";
setTimeout(()=>{
  if(this.div!=undefined)
    {
  this.div.nativeElement.innerText="";
    }
}, 2000)
}
  }

  readValue(cust:string)
  {
this.customerName=cust;
  }
}
