import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'attribute', loadChildren: () => import('./attribute-directive/attribute-directive.module').then(m => m.AttributeDirectiveModule) }, { path: 'structural', loadChildren: () => import('./structural-directive/structural-directive.module').then(m => m.StructuralDirectiveModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
