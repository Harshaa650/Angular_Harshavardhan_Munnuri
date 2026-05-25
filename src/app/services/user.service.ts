import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    city: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private usersCache$: Observable<User[]> | null = null;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    // Return cached data if available to avoid multiple API calls
    if (!this.usersCache$) {
      this.usersCache$ = this.http.get<User[]>(this.apiUrl).pipe(
        shareReplay(1), // Cache the result and share it
        catchError(err => {
          this.usersCache$ = null; // Reset cache on error
          return throwError(() => err);
        })
      );
    }
    return this.usersCache$;
  }

  // Clear cache to allow fresh fetch
  clearCache() {
    this.usersCache$ = null;
  }
}
