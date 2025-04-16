import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { iUser } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private users: iUser[] = [
    {
      name: "Mostafa",
      choice: "Yes", 
    },
    {
      name: "Phil",
      choice: "Yes",
    },
    {
      name: "Fam",
      choice: "No",
    },
]

  private userSubject = new BehaviorSubject<iUser[]>(this.users);

  constructor() { }

  getUserObservable() {
    return this.userSubject.asObservable();
  }

  addUser(user: iUser) {
    this.users.push(user);
    this.userSubject.next([...this.users]);
  }
  
}
