import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent {
  @Input() propertyId!: number;

  data = {
    type: 'income',
    category: '',
    amount: 0,
    date: ''
  };

  constructor(private service: TransactionService) {}

  submit() {
  this.service.add({
    ...this.data,
    propertyId: this.propertyId
  }).subscribe(() => {
    this.data = {
      type: 'income',
      category: '',
      amount: 0,
      date: ''
    };

    this.service.triggerRefresh(); 
  });
}

}
