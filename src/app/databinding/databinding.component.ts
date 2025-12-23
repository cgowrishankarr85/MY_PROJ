import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
 templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  productName: string="Mobile Phone";
  productCode: string ="P100";

  showAlert()
  {
    alert('Product Name ='+this.productName);
  }

}
