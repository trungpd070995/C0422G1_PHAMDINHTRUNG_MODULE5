import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  idDelete: number;
  nameDelete: string;
  nameSearch = '';

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.customerService.getAll(this.nameSearch).subscribe(customers =>{
      this.customers = customers;
      console.log(this.customers)
    });
  }

  openDelete(item: Customer) {
    this.idDelete = item.id;
    this.nameDelete = item.customerName;
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.idDelete).subscribe(() => {
      this.ngOnInit();
    });
  }

  getValueSearch(){
    this.customerService.getAll(this.nameSearch).subscribe(customer =>{
      this.customers = customer;
    })
  }

}
