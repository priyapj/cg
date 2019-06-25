import{Component,OnInit} from '@angular/core'
import{CustomerService} from './app.bookstoreService'
import {Router} from '@angular/router'
@Component({
    selector:'addprod',
    templateUrl:'add.producttocart.html'
})


export class AddProductToCartComponent{
    constructor(private customerService:CustomerService,private router:Router){}
    
    product:any={}
    AddProductToCart():any{
        this.customerService.AddProductToCart(this.product).subscribe();
        this.router.navigate(['/addProductInCart'])
    }
}