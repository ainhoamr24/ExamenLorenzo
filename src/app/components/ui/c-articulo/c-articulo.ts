import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'c-articulo',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './c-articulo.html',
  styleUrl: './c-articulo.scss'
})
export class articuloComponent {

  @Input() id!: string;
  @Input() name!: string;
  @Input() imageUrl!: string;
  @Input() currentPrice!: number;
  @Input() previousPrice!: number;
  @Input() rating!: number;
  @Input() reviewCount!: number;
  @Input() deliveryDate!: Date;
  @Input() deliveryPrice!: number;
  @Input() otherShippingOptions!: boolean;
  tomorrow: Date = new Date(new Date().setDate(new Date().getDate() + 1));
}
