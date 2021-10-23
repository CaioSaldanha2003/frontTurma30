import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  nome = environment.nome
  foto = environment.foto
  token = environment.token
  id = environment.id
  darkMode$ = this.darkModeService.darkMode$;

  constructor(
    private router: Router,
    public auth: AuthService,
    private darkModeService: DarkModeService
  ) { }

  ngOnInit(): void {
  }

  sair(){
    this.router.navigate(["/entrar"])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }

  onToggle(): void {
    this.darkModeService.toggle();
  }

}
