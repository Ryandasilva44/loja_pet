import { Component } from '@angular/core';

@Component({
  selector: 'app-about-other-section',
  templateUrl: './about-other-section.component.html',
  styleUrl: './about-other-section.component.scss',
})
export class AboutOtherSectionComponent {
  getImage: string = '../../../assets/img_about-02.jpg';
  textParagraph: string = 'Kira Petrova';
  textSecundary: string = 'Co-owner'
}
