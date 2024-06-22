import { Component } from '@angular/core';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrl: './instagram.component.scss',
})
export class InstagramComponent {
  textTitle: string = 'Follow us on Instagram';
  imgDog: string = '../../../assets/dog-01.jpeg';
  imgCat: string = '../../../assets/cat-01.jpeg';
  imgDog1: string = '../../../assets/dog-02.jpeg';
  imgCat1: string = '../../../assets/cat-02.jpeg';
}
