import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Observer, Subscription} from "rxjs";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit, OnDestroy {
  private observable: Observable<boolean>;
  private subscription: Subscription | null = null;

  constructor() {
    this.observable = new Observable((observer: Observer<boolean>) => {
     const timeout = setTimeout(() => {
        observer.next(true);
      },10000)

      return () => {
       clearTimeout(timeout);
      }
    });
  }

  ngOnInit(): void {
   this.subscription = this.observable.subscribe((value) => {
      this.isOpen = value;
    })
  }

  isOpen: boolean = false;

  onClose(): void {
    this.isOpen = !this.isOpen;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
