import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms'; // Para usar ngModel
import { CommonModule } from '@angular/common'; // Para usar *ngIf e ngClass
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule], // Adicione o CommonModule aqui
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = {
    email: '',
    password: ''
  };

  message: string = '';

  constructor(private userService: UserService, private router: Router) {}

  async onSubmit() {
    try {
      const response: any = await this.userService.postLogin(this.user);
      const token = response.token; // Supondo que o token vem na resposta
      localStorage.setItem('authToken', token);
      this.message = 'Login realizado com sucesso!';
      setTimeout(() => {
        this.router.navigate(['/admin']);
      }, 2000);
    } catch (error: any) {
      this.message = error.error || 'Erro ao realizar login. Tente novamente.';
    }
  }
}