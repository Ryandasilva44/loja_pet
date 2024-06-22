import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  getImage: string = '../../../assets/Logo.png';
  getImage1: string = '../../../assets/imagem-principal.jpeg';
  textPrimary: string = 'For all of Your';
  textSecundary: string = 'Best frined`s';
  textText: string = 'Needs';
}
