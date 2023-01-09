import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-list-single-chips-crypto',
  styleUrls: ['./list-single-chips-crypto.component.scss'],
  templateUrl: './list-single-chips-crypto.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListSingleChipsCryptoComponent {
  readonly crypto$: Observable<CryptoModel[]> = this._cryptoService.getAll().pipe(
    delay(3000),
    map(()=>[])

  );

  constructor(private _cryptoService: CryptoService) {
  }
}
