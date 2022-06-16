import { Component, OnInit } from '@angular/core';
import {  NzNotificationService } from 'ng-zorro-antd/notification';
import { IProduct } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  products!: IProduct[]
  constructor(
    private services : ProductsService,
    private notification : NzNotificationService
  ) { }

  ngOnInit(): void {
     this.getAll()
  }

   getAll(){
    this.services.getAll().subscribe(data => {
      this.products = data
    })
  }
  onRemove(id:any){
    const confrim = window.confirm("xóa?")
    if(confrim){
      this.services.remove(id).subscribe(data => {
        this.products = this.products.filter(item => item.id !== id)
        this.notification.create(
        "success",
        "Xóa thành công",
        "Xóa thành công"
      )
      })
      
    }
  }
}
