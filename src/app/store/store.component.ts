import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';
import { Product } from '../model/product';
import { ProductRepository } from '../model/product.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  selectedCategory: string | undefined;
  productsPerPage = 4;
  selectedPage = 1;

  constructor(private repository: ProductRepository, private cart:Cart, private router: Router) { }

  get products(): Product[] {
    let pageIndex = (this.selectedPage-1) * this.productsPerPage
    return this.repository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(changedCategory?:string){
    this.selectedCategory = changedCategory;
  }

  changePage(newPage:number){
    this.selectedPage = newPage;
  }

  changePageSize(newSize:number){
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number{
    return Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productsPerPage)
  }

  addProductToCart(product: Product){
    this.cart.addLine(product);
    this.router.navigate(["/cart"]);
  }

}
