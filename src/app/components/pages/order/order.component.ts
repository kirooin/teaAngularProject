import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {CustomValidators} from "../../../shared/custom-validators";
import {delay, finalize, Subscription} from "rxjs";
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  private subscriptionOrder: Subscription | null = null;

  orderForm = this.fb.group({
    product: [{value: '', disabled: true}, Validators.required],
    userInfo: this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[A-Za-zА-Яа-я]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[A-Za-zА-Яа-я]+$')]],
      number: ['', [Validators.required, CustomValidators.phoneValidator()]],
    }),
    geoInfo: this.fb.group({
      country: ['', [Validators.required, Validators.pattern('^[A-Za-zА-Яа-я]+$')]],
      zipCode: ['', [Validators.required, Validators.pattern('^\\d{6}$')]],
      address: ['', [Validators.required, Validators.pattern(/^[A-Za-zА-Яа-яЁё0-9\s\-\/]+$/)]],
    }),
    comment: [''],


  })

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private productService: ProductService) {
  }

  hideForm = false;
  errMessageNone = false;
  isLoading = false;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['product']) {
        this.orderForm.patchValue({
          product: params['product'],
        })
      }
    })
  }

  ngOnDestroy() {
    this.subscriptionOrder?.unsubscribe();
  }


  createOrder(): void {

    const formValue = this.orderForm.getRawValue()
    this.subscriptionOrder = this.productService.createOrder({
        name: formValue.userInfo.firstName ?? '',
        last_name: formValue.userInfo.lastName ?? '',
        phone: formValue.userInfo.number ?? '',
        country: formValue.geoInfo.country ?? '',
        zip: formValue.geoInfo.zipCode ?? '',
        product: formValue.product ?? '',
        address: formValue.geoInfo.address ?? '',
        comment: formValue.comment ?? '',
      }
    ).pipe(
      finalize(() => {
        this.isLoading = false
        console.log('Button is blocked')
      }),
    ) .subscribe(response => {
      console.log()
      if (response.success && response.success === 1 && !response.message) {
        this.hideForm = !this.hideForm
        this.errMessageNone = false;
      } else {
        console.error(response.message)
        this.errMessageNone = true;
      }
    })
  }

  get userInfoName() {
    return this.orderForm.get('userInfo')?.get('firstName');
  }

  get userInfoLastName() {
    return this.orderForm.get('userInfo')?.get('lastName');
  }

  get userInfoNumber() {
    return this.orderForm.get('userInfo')?.get('number');
  }

  get geoInfoCountry() {
    return this.orderForm.get('geoInfo')?.get('country');
  }

  get geoInfoZipCode() {
    return this.orderForm.get('geoInfo')?.get('zipCode');
  }

  get geoInfoAddress() {
    return this.orderForm.get('geoInfo')?.get('address');
  }


}
