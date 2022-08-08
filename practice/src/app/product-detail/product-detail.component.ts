import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public productId: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // let id:number = Number(this.route.snapshot.paramMap.get('idd'));
    // this.productId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = Number(params.get('idd'));
      this.productId = id;
    })
  }

  goPrevious(currentId: number){
    
    //this.router.navigate([this.route.snapshot.url[0].path =='mens'?'/mens':'/womens', currentId-1]);
    this.router.navigate(['../', currentId-1], {relativeTo: this.route}); //whatever the url is, just go one step back and append the currentId-1
  }
  goNext(currentId: number){
    //this.router.navigate([this.route.snapshot.url[0].path =='mens'?'/mens':'/womens', currentId+1]);
    this.router.navigate(['../', currentId+1], {relativeTo: this.route});
  }

}
