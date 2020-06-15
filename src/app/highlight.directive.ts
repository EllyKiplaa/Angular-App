import { Directive, ElementRef,Input ,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {}

  @HostListener("click") onClicks(){
   this.textDeco("Red")
 }

 @HostListener("dblclick") onDoubleClicks(){
   this.textDeco("Null")
 }
  private textDeco(color:string){
  this.elem.nativeElement.style.backgroundColor = color;
  }

}
