import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('authToken'); // Verifica se o token está no localStorage
    if (token) {
      return true; // Permite o acesso se o token existir
    } else {
      // Redireciona para a página de login se o token não estiver presente
      this.router.navigate(['/login']);
      return false;
    }
  }
}