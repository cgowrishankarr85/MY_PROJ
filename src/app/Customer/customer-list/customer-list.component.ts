import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {

  @Input('custs')
  customerList:string[];

  @Output('on-selection')
onSelect:EventEmitter<string>

  constructor()
  {
    this.customerList=[];
    this.onSelect= new EventEmitter<string>
  }

  selectCustomer(customer: string)
  {
this.onSelect.emit(customer);
  }

}
