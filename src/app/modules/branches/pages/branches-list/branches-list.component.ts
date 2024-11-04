import { Component, OnInit } from '@angular/core';
import { BranchesService } from '../../../../shared/services/branches.service';
import { branch, Datum } from '../../../../shared/models/branch';

@Component({
  selector: 'app-branches-list',
  templateUrl: './branches-list.component.html',
  styleUrls: ['./branches-list.component.css']
})
  
export class BranchesListComponent implements OnInit {
  branchesList: Datum[] = [];

  constructor(private branchesService: BranchesService) { }
  
  ngOnInit(): void {
    this.loadBranches();
  }

  loadBranches() {
    this.branchesService.indexBranches().subscribe((data: branch) => {
      this.branchesList = data.data;
    },
    error => {
      console.error("Error al cargar las sucursales", error);
    });
  }

  deleteBranch(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta sucursal?')) {
      this.branchesService.deleteBranch(id).subscribe(
        (response) => {
          console.log(response.message);
          this.loadBranches();
        },
        (error) => {
          console.error('Error al eliminar la sucursal', error);
        }
      );
    }
  }
}
