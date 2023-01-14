import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  constructor() { }
  @ViewChild('inputRefName') inputName: HTMLInputElement | undefined;
  @ViewChild('inputRefEmail') inputEmail: HTMLInputElement | undefined;
  @ViewChild('textareaRefMessage') textareaRefMessage: HTMLTextAreaElement | undefined;

  //Variables for send Mail
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  errorName: boolean = true;
  errorEmail: boolean = true;
  errorMessage: boolean = true;

  firstInteractionNameLabel = false;
  firstInteractionEmailLabel = false;
  firstInteractionMessageLabel = false;

  inputNameInvalid: boolean | undefined;
  inputEmailInvalid: boolean | undefined;
  inputMessageInvalid: boolean | undefined;

  hideOverlay: boolean = true;


  onFocus(inputRef: HTMLInputElement | HTMLTextAreaElement) {
    if (inputRef.id === 'name-field')
      this.firstInteractionNameLabel = true;
    else if (inputRef.id === 'email-field')
      this.firstInteractionEmailLabel = true;
    else if (inputRef.id === 'message-field')
      this.firstInteractionMessageLabel = true;
  }


  onBlur(inputRef: HTMLInputElement | HTMLTextAreaElement) {
    if (inputRef.id === 'name-field')
      this.checkInputNameValid(inputRef);
    else if (inputRef.id === 'email-field')
      this.checkInputEmailValid(inputRef);
    else if (inputRef.id === 'message-field')
      this.checkInputMessageValid(inputRef);
  }


  checkInputNameValid(inputRef: HTMLInputElement | HTMLTextAreaElement) {
    let re = new RegExp("^([A-Za-zäöüÄÖÜß]{1,60})$");
    if (re.test(inputRef.value)) {
      this.errorName = true;
      this.inputNameInvalid = false;
    } else {
      this.errorName = false;
      this.inputNameInvalid = true;
    }
  }


  checkInputEmailValid(inputRef: HTMLInputElement | HTMLTextAreaElement) {
    let re = new RegExp("^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,})$");
    if (re.test(inputRef.value)) {
      this.errorEmail = true;
      this.inputEmailInvalid = false;
    } else {
      this.errorEmail = false;
      this.inputEmailInvalid = true
    }
  }


  checkInputMessageValid(inputRef: HTMLInputElement | HTMLTextAreaElement) {
    let re = new RegExp("^.{1,}$");
    if (re.test(inputRef.value)) {
      this.errorMessage = true;
      this.inputMessageInvalid = false;
    } else {
      this.errorMessage = false;
      this.inputMessageInvalid = true;
    }
  }


  async sendMail() {
    if (!this.inputNameInvalid && !this.inputEmailInvalid && !this.inputMessageInvalid) {
      let nameField = this.nameField.nativeElement;
      let emailField = this.emailField.nativeElement;
      let messageField = this.messageField.nativeElement;
      let sendButton = this.sendButton.nativeElement;
      nameField.disabled = true;
      emailField.disabled = true;
      messageField.disabled = true;
      sendButton.disabled = true;
      this.hideOverlay = false;
      let fd = new FormData();
      fd.append('name', nameField.value);
      fd.append('email', emailField.value);
      fd.append('message', messageField.value);
      await fetch('https://matthias-mulzet.at/send_mail/send_mail.php',
        {
          method: 'POST',
          body: fd
        }
      );
      nameField.disabled = false;
      emailField.disabled = false;
      messageField.disabled = false;
      sendButton.disabled = false;
    }

  }

  removeOverlay() {
    window.location.reload();
    setTimeout(() => {
      this.hideOverlay = true;
    }, 300);
  }
}
