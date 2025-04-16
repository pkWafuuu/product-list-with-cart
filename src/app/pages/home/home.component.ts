import { Component } from '@angular/core';
import { GeneralTableComponent } from "../../components/general-table/general-table.component";
import { CommonModule } from '@angular/common';
import { UserService } from '../../user.service';
import { iUser } from '../../app.model';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GeneralTableComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  homeHeaders = ['UID', 'Names', 'Choice'];
  homeData: any[] = [];

  userData: iUser = {
    name: "",
    choice: ""
  }

   constructor(private userSvc: UserService){}

  ngOnInit() {
    this.userSvc.getUserObservable().subscribe(users => {
      this.homeData = users.map((user,index) => {
        return {
          UID: index + 1,
          Names: user.name,
          Choice: user.choice
        }
      })
    })
  }

  addUser(userData: iUser) {
    this.userSvc.addUser(userData);
  }

  // ngOnInit(): void {
    
  // }
  // homeData = [
  //   { Names: 'Mostafa ', Choice: 'Yes' },
  //   { Names: 'Phil ', Choice: 'Yes' },
  //   { Names: 'Fam ', Choice: 'No'},
  //   { Names: 'Albert', Choice: 'No'},
  //   { Names: 'Mario', Choice: 'Yes'},
  // ];

}
