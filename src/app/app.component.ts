import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'demo2';
  loadedUsers = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {}

  // onSubmit() {
  //   console.log('Form submitted!');
  // }

  onAddUser(addData: { firstName: string; lastName: string, email: string, password: string }) {
    // Send Http request
    console.log(addData);
  }

  onGetUsers() {
    // Send Http request
  }

  onDeleteUsers() {
    // Send Http request
  }

}
