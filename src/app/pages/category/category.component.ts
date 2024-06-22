import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  textTitle: string = 'Play';
  textTitle1: string = 'Walker';
  textTitle2: string = 'Sleep';
  textTitle3: string = 'Offline';
  textTitle4: string = 'Choose a Category';
  textParagraph1: string = 'End of Season Sale';
  textPragraph: string = 'Smaple text. Click to selct the Text Element';
  getImage: string = '../../../assets/icone-seta.png';
  getImage1: string = '../../../assets/imagem-cachorro1.jpeg';
  getImage2: string = '../../../assets/imagem-cachorro2.jpeg';
  getImage3: string = '../../../assets/imagem-cachorro3.jpeg';
}
