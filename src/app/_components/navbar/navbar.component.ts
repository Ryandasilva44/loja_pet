import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  getImage: string = '../../../assets/Logo.png';

  activeLink: string = '';
  constructor(private router:Router){}

  setActive(link:string): void{
    this.activeLink = link;
  }
}
