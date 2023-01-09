import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsModel } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list-multi-list-products',
  styleUrls: ['./list-multi-list-products.component.scss'],
  templateUrl: './list-multi-list-products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListMultiListProductsComponent {

  readonly products$: Observable<ProductsModel[]> = this._productsService.getAll();

  constructor(private _productsService: ProductsService) {
  }
}
