import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  labelName: any;
  labelEmail: any;
  labelMessage: any;
  event: any;


  async sendMail() {
    //action="https://matthias-mulzet.at/send_mail/send_mail.php"
    console.log('Sending mail', this.myForm);
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    //sende Animation anzeigen 
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);
    await fetch('https://matthias-mulzet.at/send_mail/send_mail.php',
      //https://matthias-mulzet.developerakademie.net/send_mail1/send_mail.php
      {
        method: 'POST',
        body: fd
      }
    );

    //Text anzeigen Nachricht getestet
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }

  addClassToLabel(inputField: any) {
    this.checkInputFieldAndStyleLabel(inputField)
  }


  checkInputFieldAndStyleLabel(inputField: any) {
    if (inputField === 'name')
      this.labelName = inputField;
    else if (inputField === 'email')
      this.labelEmail = inputField;
    else if (inputField === 'message')
      this.labelMessage = inputField;
  }


  preventEnterKey(e: any, inputField: any) {
    if (e.key === 'Tab')
      this.checkInputFieldAndStyleLabel(inputField);
  }
}
