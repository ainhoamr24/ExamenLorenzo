import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Button overview
 */
@Component({
  selector: 'button-overview-example',
  templateUrl: 'c-button.html',
  styleUrl: 'c-button.scss',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class CButton {}
