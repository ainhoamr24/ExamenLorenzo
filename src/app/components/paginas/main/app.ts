import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

import { CPanel } from '../../ui/c-panel/c-panel';
import { LFlex } from '../../ui/l-flex/l-flex';
import { CButton } from '../../ui/c-button/c-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, CButton, CPanel, LFlex],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('examen');
  alerta(mensaje: string): void {
        console.log("Acción ejecutada: " + mensaje);
        // NOTA: Usar un modal o un mensaje en el DOM en lugar de alert()
    }
}