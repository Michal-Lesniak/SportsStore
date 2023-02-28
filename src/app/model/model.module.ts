import { StaticDataSource } from './static-data-source';
import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { Cart } from './cart.model';


@NgModule({
  providers: [ StaticDataSource,
  ProductRepository,
  Cart  
]
})
export class ModelModule { }
