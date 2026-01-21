import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PropertyService } from '../../services/property.service';
import { TransactionListComponent } from '../transaction-list/transaction-list.component';
import { TransactionFormComponent } from '../transaction-form/transaction-form.component';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TransactionListComponent,
    TransactionFormComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  properties: any[] = [];
  selectedProperty: number | '' = '';
  selectedPropertyName = '';

  totalIncome = 0;
  totalExpense = 0;
  profit = 0;

  constructor(
  private propertyService: PropertyService,
  private cdr: ChangeDetectorRef
) {}

ngOnInit(): void {
  this.propertyService.getProperties().subscribe(res => {
    this.properties = res;
    this.cdr.detectChanges();
  });
}

  onPropertyChange(): void {
  const selected = this.properties.find(
    p => p.id === Number(this.selectedProperty)
  );

  this.selectedPropertyName = selected ? selected.name : '';

  this.totalIncome = 0;
  this.totalExpense = 0;
  this.profit = 0;
}


recalcProfit(): void {
  this.profit = this.totalIncome - this.totalExpense;
}

}

