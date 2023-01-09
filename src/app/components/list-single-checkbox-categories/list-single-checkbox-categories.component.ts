import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-list-single-checkbox-categories',
  styleUrls: ['./list-single-checkbox-categories.component.scss'],
  templateUrl: './list-single-checkbox-categories.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListSingleCheckboxCategoriesComponent {
  readonly categories$: Observable<string[]> = this._productsService.getAllCategories();

  constructor(private _productsService: ProductsService) {
}
}
