import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDetectFocus]'
})
export class DetectFocusDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) { }

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
    }
}