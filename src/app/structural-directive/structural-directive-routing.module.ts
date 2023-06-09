import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructuralDirectiveComponent } from './structural-directive.component';

const routes: Routes = [{ path: '', component: StructuralDirectiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructuralDirectiveRoutingModule { }
