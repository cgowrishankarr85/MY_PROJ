export class Product {
    productId:number;
    productCode:string;
    productName:string;
    price:number;

    constructor();
    constructor(pId:number,  pName:string, pCode:string, pPrice:number);

    constructor(pId?:number,  pName?:string, pCode?:string, pPrice?:number)
    {
this.productId= pId ?? 0;
this.productCode= pCode ?? "";
this.productName= pName ?? "";
this.price= pPrice ?? 0;
    }
}
