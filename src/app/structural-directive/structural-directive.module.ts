import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructuralDirectiveRoutingModule } from './structural-directive-routing.module';
import { StructuralDirectiveComponent } from './structural-directive.component';
import { UnlessDirective } from './directive/unless.directive';


@NgModule({
  declarations: [
    StructuralDirectiveComponent,
    UnlessDirective
  ],
  imports: [
    CommonModule,
    StructuralDirectiveRoutingModule
  ]
})
export class StructuralDirectiveModule { }
