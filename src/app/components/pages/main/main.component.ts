import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [
    './main.component.scss',
    '../../../../../node_modules/slick-carousel/slick/slick.scss',
    '../../../../../node_modules/slick-carousel/slick/slick-theme.scss',
    '../../../../../node_modules/jquery-ui-dist/jquery-ui.min.css',

  ]
})
export class MainComponent implements OnInit, AfterViewInit {

  private loadedScripts: HTMLScriptElement[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.loadScripts([
      '/assets/js/jquery-3.7.1.min.js',
      '/assets/js/jquery-ui.min.js',
      '/assets/js/slick.min.js',
      '/assets/js/script.js'
    ])
  }

  ngAfterViewInit() {

  }

  loadScripts(srcs: string[]): void {
    srcs.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
      this.loadedScripts.push(script);
    })

  }

  ngOnDestroy() {
    this.loadedScripts.forEach(script => {
      script.remove();
    })
  }
}
