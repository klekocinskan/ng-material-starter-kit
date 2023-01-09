import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-list-single-menu-categories',
  styleUrls: ['./list-single-menu-categories.component.scss'],
  templateUrl: './list-single-menu-categories.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListSingleMenuCategoriesComponent {
  readonly categories$: Observable<string[]> = this._productsService.getAllCategories();

  constructor(private _productsService: ProductsService) {
  }
}
