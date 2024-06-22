import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  textTitle: string = 'Contact Us';
  textName: string = 'Name';
  textEmail: string = 'Email';
  textMessage: string = 'Message';
}
