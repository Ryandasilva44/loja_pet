import { Component } from '@angular/core';

@Component({
  selector: 'app-about-descontos',
  templateUrl: './about-descontos.component.html',
  styleUrl: './about-descontos.component.scss',
})
export class AboutDescontosComponent {
  imgIcon: string = '../../../assets/image-icon-01.png';
  imgIcon1: string = '../../../assets/image-icon-02.png';
  imgIcon2: string = '../../../assets/image-icon-03.png';
  imgIcon3: string = '../../../assets/image-icon-03.png';
  getImage: string = '../../../assets/imagem-de-gato.jpeg';
  textIcon: string = 'Quality';
  textIcon1: string = 'Fair Princing';
  textIcon2: string = 'Transparecy';
  textIcon3: string = 'Family business';
  textTitle: string = 'Save 20%';
  textSecundary: string = 'Why Pets Owners Loves Us';
  textParagraph: string = 'End of Season Sale!';
  textParagraph1: string = 'Save on all items. Ends soon, Shop now.';
  textButton: string = 'About Us';
  textButton1: string = 'Contact Us';
}
