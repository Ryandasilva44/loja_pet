import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
})
export class AnimateOnScrollDirective implements OnInit {
  @Input() animationClass: string = 'animate__zoomIn';
  @Input() delayClass: string = 'animate__delay-2s';
  @Input() durationClass: string = 'animate__duration-1S';

   private alreadyAnimated: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    const element = this.el.nativeElement;
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (position < screenPosition) {
      this.renderer.addClass(element, 'animate__animated');
      this.renderer.addClass(element, this.animationClass);
      this.renderer.addClass(element, this.delayClass);
      this.renderer.addClass(element, this.durationClass);
    }
  }
}
