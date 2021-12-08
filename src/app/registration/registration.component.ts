import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  ngOnInit(): void {
  }

  email!: String
  password!: String
  phone!: String
  result!: String

  constructor(private http:HttpClient){}

  postData() {

    let url = "https://bookreview222.herokuapp.com/api/registration"

    this.http.post(url, {
      email:this.email,
      password:this.password,
      phone:this.phone

    }).toPromise()
    .then((data: any) => {
      console.log(data)
      this.result = "You have sucessfully registered an Account!"
    },)
    .catch((data: any) => {
      console.log(data)
      this.result = "Your account was not created please enter all fields!"
    },)
  }

}
