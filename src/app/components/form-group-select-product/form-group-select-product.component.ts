import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-form-group-select-product',
  styleUrls: ['./form-group-select-product.component.scss'],
  templateUrl: './form-group-select-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGroupSelectProductComponent {
  readonly categories$: Observable<string[]> = this._productsService.getAllCategories();
  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    category: new FormControl()
  });

  constructor(private _productsService: ProductsService) {
  }

  onProductFormSubmitted(productForm: FormGroup): void {
    this._productsService.createNewProduct({
      title: productForm.get('title')?.value,
      price: productForm.get('price')?.value,
      category: productForm.get('category')?.value,
      description: productForm.get('description')?.value
    }).subscribe();
  }
}
