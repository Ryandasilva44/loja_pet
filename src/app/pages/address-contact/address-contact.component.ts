import { Component } from '@angular/core';

@Component({
  selector: 'app-address-contact',
  templateUrl: './address-contact.component.html',
  styleUrl: './address-contact.component.scss',
})
export class AddressContactComponent {
  textTitle: string = 'How to reach us';
  textAddress: string = 'Address';
  textParagraph: string = 'Street Name, Zip Code, Country';
  emailParagraph: string = 'mail@mailservice.com';
  telParagraph: string = '(555) 555-555';
  textHour: string = 'Opening Hours';
  textNumber: string = '9:00 - 17:00';
  textSocial: string = 'Social';
  textText: string = 'Sample text. Click to select the Text Element';
}
