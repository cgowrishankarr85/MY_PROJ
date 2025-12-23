import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFavs]'
})
export class FavsDirective {
  private isLiked: boolean = false;

  @Input('appFavs')
    color: string | undefined;

  constructor(private ele: ElementRef) {
    console.log(this.ele.nativeElement);
     this.updateColor();

  }

  //@HostListener('mouseover')
 // onmouseover() {
   // this.ele.nativeElement.style.color = 'violet';
  //}

  //@HostListener('mouseout')
  //onmouseout() {
    //this.ele.nativeElement.style.color = 'black';
  //}
  @HostListener('click')
  onClick() {
    this.isLiked = !this.isLiked;
    this.updateColor();
  }

  updateColor() {
    if (this.isLiked) {
      this.ele.nativeElement.style.color = this.color;
      this.ele.nativeElement.value = 'UnLike';
    }
    else {
      this.ele.nativeElement.style.color = 'black';
      this.ele.nativeElement.value = 'Like';
    }
  }
}
