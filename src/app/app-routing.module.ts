import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module')
      .then(m => m.HomeModule)
  },

  {
    path: 'suppliers',
    loadChildren: () => import('./modules/suppliers/suppliers.module')
      .then(m => m.SuppliersModule)
  },

  {
    path: 'branches',
    loadChildren: () => import('./modules/branches/branches.module')
      .then(m => m.BranchesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
