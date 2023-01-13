import { Directive, HostListener, ElementRef, Renderer2, Input, ViewChild } from '@angular/core';

@Directive({
    selector: '[appDetectFocus]',
    exportAs: 'directiveExport'
})
export class DetectFocusDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) {

    }

    errorName = false;


    @HostListener('focus')
    onFocus() {
        if (this.el.nativeElement.nextElementSibling.id === 'message-label') {
            this.renderer.addClass(this.el.nativeElement.nextElementSibling, 'label-textarea-on-top');
        }

        else if (this.el.nativeElement.nextElementSibling.id === 'name-label' || this.el.nativeElement.nextElementSibling.id === 'email-label')
            this.renderer.addClass(this.el.nativeElement.nextElementSibling, 'label-input-on-top');
    }

    @HostListener('blur')
    onBlur() {
        let elementId = this.el.nativeElement.id;
        let elementIdValue = this.el.nativeElement.value;
        if (elementId === 'name-field') {
            let re = new RegExp("^([A-Za-z]{1,60})$");
            if (re.test(elementIdValue)) {
                console.log("Valid");
            } else {
                console.log("Invalid");
                this.errorName = true;
                console.log(this.errorName);
                // this.renderer.removeClass(this.id.nativeElement, 'hidde-error-message');
            }
        }

        else if (elementId === 'email-field') {
            let re = new RegExp("^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,})$");
            if (re.test(elementIdValue)) {
                console.log("Valid");
            } else {
                console.log("Invalid");

                // this.renderer.removeClass(this.id.nativeElement, 'hidde-error-message');
            }
        }

        else if (elementId === 'message-field') {
            let re = new RegExp("^(.{2,})$");
            if (re.test(elementIdValue)) {
                console.log("Valid");
            } else {
                console.log("Invalid");

                // this.renderer.removeClass(this.id.nativeElement, 'hidde-error-message');
            }
        }



    }
}