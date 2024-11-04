import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersListComponent } from './pages/suppliers-list/suppliers-list.component';
import { SuppliersRoutingModule } from './suppliers-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    SuppliersListComponent
  ],
  imports: [
    CommonModule,
    SuppliersRoutingModule,
    TableModule,
    ButtonModule,
  ]
})
export class SuppliersModule { }
