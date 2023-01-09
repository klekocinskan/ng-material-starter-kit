import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { bufferTime, debounceTime, delay, tap, map, Observable, takeUntil, timeout, timer, repeat } from 'rxjs';
import { ProductsModel } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-list-loading-list-products',
  styleUrls: ['./list-loading-list-products.component.scss'],
  templateUrl: './list-loading-list-products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListLoadingListProductsComponent {
  //Loaded state 1 point
  //readonly products$: Observable<ProductsModel[]> = this._productsService.getAll();

  //Loading state 1 point
  // readonly products$: Observable<ProductsModel[]> = this._productsService.getAll().pipe(
  //   delay(5000)
  // );

  //Empty state 1 point
  // readonly products$: Observable<ProductsModel[]> = this._productsService.getAll().pipe(
  //   map(()=>[])
  // );

  //Empty state and loading state together. I have problem with longer display list.
  readonly products$: Observable<ProductsModel[]> = this._productsService.getAll().pipe(
    delay(3000),
    map(()=>[])
  )

  
  constructor(private _productsService: ProductsService) {
  }
}
