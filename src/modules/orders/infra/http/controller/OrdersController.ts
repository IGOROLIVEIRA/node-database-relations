import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateOrderService from '@modules/orders/services/CreateOrderService';
import FindOrderService from '@modules/orders/services/FindOrderService';

export default class OrdersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;
    const findOrders = container.resolve(FindOrderService);

    const orders = findOrders.execute({
      id,
    });

    return response.json(orders);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { customer_id, products } = request.body;

    const createOrders = container.resolve(CreateOrderService);

    const orders = createOrders.execute({
      customer_id,
      products,
    });

    return response.json(orders);
  }
}
