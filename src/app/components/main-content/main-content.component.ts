import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  router = inject(Router);
  private viewportScroller = inject(ViewportScroller);

  booking(): void {
    this.router.navigate(['./reservation']);
  }

  scrollToServices(): void {
    this.viewportScroller.scrollToAnchor('services');
  }
}
