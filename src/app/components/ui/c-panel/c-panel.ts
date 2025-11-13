import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'c-panel',
  templateUrl: './c-panel.html',
  styleUrl: './c-panel.scss',
  imports: [CommonModule],
  standalone: true,
  // No necesitamos ViewEncapsulation.None ya que los estilos BEM
  // se aplican dentro de su propia plantilla (c-panel.html)
})
export class CPanel {
  @Input() titulo: string = 'Panel de Información';
  @Input() tipo: 'normal' | 'advertencia' | 'peligro' = 'normal';
}