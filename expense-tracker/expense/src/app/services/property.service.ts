import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PropertyService {
  private api = 'http://localhost:3000/properties';

  constructor(private http: HttpClient) {}

  getProperties() {
    return this.http.get<any[]>(this.api);
  }
}
