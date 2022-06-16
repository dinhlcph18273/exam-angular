import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { IProduct } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  product: IProduct = {
    name: "",
    img: "",
    price: 0,
    desc: ""
  }
  products!: IProduct[]
  constructor(
    private services : ProductsService,
    private router: Router,
    private notification: NzNotificationService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get("id")
    if(id){
      this.services.get(id).subscribe(data => {
        this.product = data
      })
    }
  }

  ngSubmit(){
    const id = this.activeRoute.snapshot.paramMap.get("id")
    
    if(id){
      this.services.edit(this.product).subscribe(data => {
        this.notification.create(
        "success",
        "Sửa thành công",
        "Sửa thành công"
      )
      this.router.navigateByUrl("/products")
      })
    }
    else{
      this.services.create(this.product).subscribe(data => {
        this.notification.create(
        "success",
        "Thêm thành công",
        "Thêm thành công"
      )
      this.router.navigateByUrl("/products")
      })
    }
    
  }
  
}
