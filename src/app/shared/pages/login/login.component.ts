import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private userService: UserService) {}

  user: User = {
    email: "",
    password: ""
  }
  onSubmit(){
    this.userService.postLogin(this.user).then(
      response => {
        console.log(response);
        sessionStorage.setItem("token", JSON.stringify(response));
      }
    );
  }
}
