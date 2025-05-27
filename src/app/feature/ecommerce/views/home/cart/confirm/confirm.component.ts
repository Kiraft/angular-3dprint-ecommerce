import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html'
})
export class ConfirmComponent {
  name!: string;
  lastname!: string;
  phoneCode!: string;
  phone!: string;
 date: Date = new Date();

  address!: string;
  city!: string;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'] // Por ejemplo: "impresoras"
      this.lastname = params['lastname'] // Por ejemplo: "impresoras"
      this.phoneCode = params['phoneCode'] // Por ejemplo: "impresoras"
      this.phone = params['phone'] // Por ejemplo: "impresoras"
      this.address = params['address'] // Por ejemplo: "impresoras"
      this.city = params['city'] // Por ejemplo: "impresoras"
    });
  }


}
