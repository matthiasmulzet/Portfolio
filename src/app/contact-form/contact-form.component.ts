import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  hidde: any;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  @ViewChild('errorNameSpan') errorNameSpan!: ElementRef;


  event: any;

  isFocused = false;

  onFocus(event: FocusEvent) {
    this.isFocused = true;
  }

  onBlur(event: FocusEvent) {
    this.isFocused = false;
  }


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






  // checkForEnterOrTab(event: KeyboardEvent, inputFielName: string) {
  //   if (event.key === 'Enter' || event.key === "NumpadEnter") {
  //     if (inputFielName === 'name') {
  //       this.renderer.removeClass(this.errorName.nativeElement, 'hidde-error-message');
  //     }
  //     else if (inputFielName === 'email') {
  //       this.renderer.removeClass(this.errorEmail.nativeElement, 'hidde-error-message');
  //     }
  //     else if (inputFielName === 'message') {
  //       this.renderer.removeClass(this.errorMessage.nativeElement, 'hidde-error-message');
  //     }
  //   }
  //   if (event.key === 'Tab') {
  //     if (inputFielName === 'name') {
  //       this.renderer.removeClass(this.errorName.nativeElement, 'hidde-error-message');
  //     }
  //     else if (inputFielName === 'email') {
  //       this.renderer.removeClass(this.errorEmail.nativeElement, 'hidde-error-message');
  //     }
  //     else if (inputFielName === 'message') {
  //       this.renderer.removeClass(this.errorMessage.nativeElement, 'hidde-error-message');
  //     }
  //   }
  // }
}
