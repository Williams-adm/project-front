import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../../../../shared/services/suppliers.service';
import { supplier, Datum } from '../../../../shared/models/supplier';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrl: './suppliers-list.component.css'
})
export class SuppliersListComponent implements OnInit{
  supplierList: Datum[] = []

  constructor(private suppliersService: SuppliersService) { }
  
  ngOnInit(): void {
    this.loadSuppliers();
  }

  loadSuppliers() {
    this.suppliersService.indexSuppliers().subscribe((data: supplier) => {
      this.supplierList = data.data;
    },
      error => {
        console.error("Error al cargar los proveedores", error);
    });
  }

  deleteSupplier(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta sucursal?')) {
      this.suppliersService.deleteSupplier(id).subscribe(
        (response) => {
          console.log(response.message);
          this.loadSuppliers();
        },
        (error) => {
          console.error('Error al eliminar la sucursal', error);
        }
      );
    }
  }
}
