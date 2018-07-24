import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    alert('OLA');
    this.auth.setUser({id: "1232", name: "Fake man", image: ""})
  }
}
