import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private api = 'http://localhost:3000/transactions';

  refresh$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  getByProperty(propertyId: number) {
    return this.http.get<any[]>(`${this.api}?propertyId=${propertyId}`);
  }

  add(data: any) {
    return this.http.post(this.api, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }

  triggerRefresh() {
    this.refresh$.next();
  }
}
