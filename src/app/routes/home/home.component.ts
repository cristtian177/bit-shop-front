import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(public productService: ProductService ) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe( (res: any) =>{
      this.productService.products = res.data
      console.log(res.data)
    })

  }


}
