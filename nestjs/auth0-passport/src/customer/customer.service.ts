import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  private customers = [
    {
      id: 1,
      name: 'john',
    },
    {
      id: 2,
      name: 'juan',
    },
  ];
  create(createCustomerDto: CreateCustomerDto) {
    this.customers.push(createCustomerDto);
  }

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    return this.customers.find((customer) => {
      return (customer.id = id);
    });
  }
}
