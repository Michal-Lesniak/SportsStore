import { StaticDataSource } from './static-data-source';
import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';


@NgModule({
  providers: [ StaticDataSource,
  ProductRepository,
]
})
export class ModelModule { }
