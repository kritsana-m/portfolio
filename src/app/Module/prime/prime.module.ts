import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {KeyFilterModule} from 'primeng/keyfilter';

const Module = [
  ButtonModule,
  ScrollPanelModule,
  KeyFilterModule
]

@NgModule({
  imports: [CommonModule,Module],
  exports: [Module]
})
export class PrimeModule { }
