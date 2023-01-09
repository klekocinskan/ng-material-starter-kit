import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsModel } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-list-multi-table-products',
  styleUrls: ['./list-multi-table-products.component.scss'],
  templateUrl: './list-multi-table-products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListMultiTableProductsComponent {
  readonly products$: Observable<ProductsModel[]> = this._productsService.getAll();

  constructor(private _productsService: ProductsService) {
}
}
