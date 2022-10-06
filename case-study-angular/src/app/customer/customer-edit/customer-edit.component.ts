import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../model/customer-type";
import {CustomerService} from "../../service/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerTypeService} from "../../service/customer-type.service";
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerForm: FormGroup;
  customerTypes: CustomerType[] = [];
  id: number;
  customer: Customer = null;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.customerService.findById(this.id).subscribe(customer => {
        this.customerForm = new FormGroup(
          {
            customerName: new FormControl(customer.customerName, [Validators.required]),
            customerBirthday: new FormControl(customer.customerBirthday, [Validators.required]),
            customerGender: new FormControl(customer.customerGender, [Validators.required]),
            customerIdCard: new FormControl(customer.customerIdCard, [Validators.required, Validators.pattern('\\d{9}|\\d{11}')]),
            customerPhone: new FormControl(customer.customerPhone, [Validators.required, Validators.pattern('^09[0|1][0-9]{7}$')]),
            customerEmail: new FormControl(customer.customerEmail, [Validators.required, Validators.email]),
            customerAddress: new FormControl(customer.customerAddress, [Validators.required]),
            customerType: new FormControl(customer.customerType.id, [Validators.required]),
          }
        );
      });
    });
  }

  ngOnInit(): void {
    this.getAllCustomerType();
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    });
  }

  updateCustomer(id: number) {
    const customer = this.customerForm.value;
    this.customerTypeService.findById(this.customerForm.value.customerType).subscribe(customerType => {
      customer.customerType = customerType;
      this.customerService.updateCustomer(id, customer).subscribe(() => {
        this.router.navigateByUrl('customer/list');
      });
    })
  }
}
