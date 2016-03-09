import { Order } from './order.model';

export interface Customer {
    // Retrieved from Credit Card, Apple Pay, etc.
    name: string;
    order: Order;
}