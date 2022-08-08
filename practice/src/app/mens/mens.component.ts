import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent implements OnInit {

  public products:any = [];
  constructor(private _productsService: ProductsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.products = this._productsService.getProducts();
      
  }

  onClick(productReceivedFromTemplate: any){
    //this.router.navigate(['/mens', productReceivedFromTemplate.id]); //finds the mens/:placeholder in routes array and appends the productReceivedFromTemplate.id to it
    //console.log(this.router.navigate(['/mens', productReceivedFromTemplate.id]));
    this.router.navigate([productReceivedFromTemplate.id], {relativeTo: this.route});
  }

}
