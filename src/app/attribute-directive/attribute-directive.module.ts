import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttributeDirectiveRoutingModule } from './attribute-directive-routing.module';
import { AttributeDirectiveComponent } from './attribute-directive.component';
import { HighlightDirective } from './directive/highlight.directive';


@NgModule({
  declarations: [
    AttributeDirectiveComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    AttributeDirectiveRoutingModule
  ]
})
export class AttributeDirectiveModule { }
