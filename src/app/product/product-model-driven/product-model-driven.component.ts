import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-model-driven',
  templateUrl: './product-model-driven.component.html',
  styleUrl: './product-model-driven.component.css'
})
export class ProductModelDrivenComponent {

  frm: FormGroup

  constructor(private fb: FormBuilder) {
    //this.frm= new FormGroup({});
    this.frm = this.fb.group({
      productId: this.fb.control(''),
      productCode: this.fb.control('', { updateOn: 'blur', validators: [Validators.required] }),
      productName: this.fb.control('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]),
      price: this.fb.control(''),
      description: this.fb.group({
        shortDesc: this.fb.control(''),
        fullDesc: this.fb.control(''),
      }),
      codes:this.fb.array([this.fb.control(''), this.fb.control('')])
    });

    this.frm.get('productCode')?.valueChanges.subscribe(data => {
      let priceCtrl = this.frm.get('price');
      priceCtrl?.clearValidators();

      if (data != null && data.indexOf('p') != -1) {
        priceCtrl?.addValidators([Validators.required]);
      }
      priceCtrl?.updateValueAndValidity();
    })
  }

  saveProduct() {
    if (this.frm.valid) {
      let data = JSON.stringify(this.frm.value);
      alert('product saved Successfully' + data);
    }
  }

  get codes()
  {
    return this.frm.controls["codes"] as FormArray;
  }

  disableValidation() {
    //find the element
    let prodNameCtrl = this.frm.get('productName');

    //clear element
    prodNameCtrl?.clearValidators();

    //update the UI
    prodNameCtrl?.updateValueAndValidity();

  }

resetForm()
{
  this.frm.reset();
}

update()
{
  //this.frm.get('productId')?.setValue(232223);
  this.frm.patchValue({
    productId:23242,
    productCode:'P23242',
    productName:'Sample',
    price:343430,
    description:{
      shortDesc:"dfdsfdfsd",
      fullDesc:"efjbfjdsfb dfjdbfjsdb djfndsjfbs sdfjdfndsjfn"
    }
  });
  this.frm.get('productId')?.setValue(232223);
}

}
