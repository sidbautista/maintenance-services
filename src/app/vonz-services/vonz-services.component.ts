import { Component, AfterViewInit, Renderer2, HostListener, OnInit  } from '@angular/core';
import * as WOW from 'wow.js';
@Component({
  selector: 'app-vonz-services',
  templateUrl: './vonz-services.component.html',
  styleUrls: ['./vonz-services.component.scss']
})
export class VonzServicesComponent implements AfterViewInit, OnInit {
  slidesPerView: number = 3;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.updateSlidesPerViewAttribute();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateSlidesPerViewAttribute();
  }

 updateSlidesPerViewAttribute() {
  const swiperContainer: HTMLElement | null = document.querySelector('.swiper-container');
  const windowWidth = window.innerWidth;

    if (windowWidth <= 1050) {
      this.slidesPerView = 2;
        if (windowWidth <= 750) {
          this.slidesPerView = 1;
        }
    } else {
      this.slidesPerView = 3;
    }

    if (swiperContainer) {
      this.renderer.setAttribute(swiperContainer, 'slides-per-view', this.slidesPerView.toString());
    }
  }
  ngOnInit() {
    // Initialize WOW
    const wow = new (WOW as any)({
      mobile: false,
    });
    wow.init();
  }
}
