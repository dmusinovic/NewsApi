import { ComponentFactoryResolver, ComponentRef, Directive, ElementRef, Input, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[matSpinner]'
})
export class MatSpinnerDirective implements OnInit {

  @Input()
  set matSpinner(value: Observable<boolean> | boolean) {
    if (value instanceof Observable) {
      (value as Observable<boolean>).subscribe(shouldBlock => {
        if (shouldBlock) {
          this.blockUI();
        } else {
          this.unblockUI();
        }
      });
    } else {
      if (value) {
        this.blockUI();
      } else {
        this.unblockUI();
      }
    }
  }
  private loaderElement: HTMLElement;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    const loaderHtml = `<div class="showbox">
    <div class='loader'>
      <svg class='circular' viewBox='25 25 50 50'>
        <circle class='path' cx="50" cy='50' r='10' fill="none" stroke-width="2" stroke-miterlimit="10"/>
      </svg>
    </div>
  </div>`;
    this.loaderElement = this.renderer.createElement('div');
    this.loaderElement.innerHTML = loaderHtml;
  }

  ngOnInit(): void { }

  private blockUI(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '0.6');
    this.renderer.appendChild(
      this.elementRef.nativeElement,
      this.loaderElement
    );
  }

  private unblockUI(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '1');
    this.renderer.removeChild(
      this.elementRef.nativeElement,
      this.loaderElement
    );
  }

}
