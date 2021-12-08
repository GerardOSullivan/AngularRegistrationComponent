import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
ngOnInit(){}
  email!: String
  password!: String
  phone!: String
  result!: String

  constructor(private http:HttpClient){}

  postData() {

    let url = "http://localhost:3000/api/"

    this.http.post(url, {
      email:this.email,
      password:this.password,
      phone:this.phone

    }).toPromise().then((data: any) => {
      console.log(data)
      console.log(JSON.stringify(data.json.email))
      this.result = "You have sucessfully registered an Account!"
    })

  }
}
