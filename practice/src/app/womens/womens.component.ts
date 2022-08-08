import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css']
})
export class WomensComponent implements OnInit {

  public products: any = [];
  constructor(private _productsService: ProductsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.products = this._productsService.getProducts();
  }

  onClick(product:any){
    //this.router.navigate(['/womens', product.id]);
    this.router.navigate([product.id], {relativeTo: this.route});
  }

}
