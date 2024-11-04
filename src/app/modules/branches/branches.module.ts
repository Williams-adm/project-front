import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchesListComponent } from './pages/branches-list/branches-list.component';
import { BranchesRoutingModule } from './branches-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    BranchesListComponent
  ],
  imports: [
    CommonModule,
    BranchesRoutingModule,
    TableModule,
    ButtonModule,
  ]
})
export class BranchesModule { }
