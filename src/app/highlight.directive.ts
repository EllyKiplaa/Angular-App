import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }

  @HostListener("click") onClicks( ){
    this.textDeco("Red")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None");
  }

  private textDeco(color:string){
    this.elem.nativeElement.style.backgroundColor='color';

   }

}
