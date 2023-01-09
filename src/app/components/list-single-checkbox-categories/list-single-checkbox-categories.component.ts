import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-list-single-checkbox-categories',
  styleUrls: ['./list-single-checkbox-categories.component.scss'],
  templateUrl: './list-single-checkbox-categories.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListSingleCheckboxCategoriesComponent {
  readonly categories$: Observable<string[]> = this._productsService.getAllCategories().pipe(
    delay(3000),
    map(()=>[])
  );

  constructor(private _productsService: ProductsService) {
}
}
