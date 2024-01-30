import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent implements OnInit{
  constructor(private http: HttpClient){}

  ngOnInit(): void {}

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onAddUser(userData: { firstName: string; lastName: string, email: string, password: string }) {
    // Send Http request
    this.http.post('https://console.firebase.google.com/project/emp-mng-78061/database/emp-mng-78061-default-rtdb/data/~2F/users.json', 
    userData)
    .subscribe(responseData => {
      console.log(responseData);
    });
  }

  onGetUsers() {
    // Send Http request
  }

  onDeleteUsers() {
    // Send Http request
  }

}

