import { Component, Input, ViewEncapsulation, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  // Aplica este componente a cualquier elemento con el atributo [l-flex]
  selector: '[l-flex]',
  template: '<ng-content></ng-content>',
  styleUrl: './l-flex.scss',
  imports: [CommonModule],
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class LFlex {
  @Input() direction: 'row' | 'column' = 'row';
  @Input() justify: 'start' | 'center' | 'end' = 'start';

  @HostBinding('class')
  get hostClasses(): Record<string, boolean> {
    return {
      'l-flex': true, // Clase base del Layout BEM
      [`l-flex--${this.direction}`]: true,
      [`l-flex--justify-${this.justify}`]: true,
    };
  }
}