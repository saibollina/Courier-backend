import { Router} from 'express';

import { findAll, create, estimateDeliveryCost, findAllOrdersAssignedToDP,findAllOrdersPlacedByClerk, findOne, updateOrderDetails, pickedup, delivered, deleteOrder } from "../controller/order.controller.js";


export const orderRouter = Router();

orderRouter.get('/orders', findAll);

orderRouter.post('/orders',create);

orderRouter.get('/orders/estimateCost', estimateDeliveryCost);

orderRouter.get('/orders/assignedTo/:deliveryPersonId',findAllOrdersAssignedToDP);
orderRouter.get('/orders/orderedBy/:clerkId',findAllOrdersPlacedByClerk);
orderRouter.put('/orders/:id', updateOrderDetails)
orderRouter.get('/orders/:id', findOne);
orderRouter.put("/orders/pickedup/:id", pickedup);
orderRouter.put("/orders/delivered/:id", delivered);
orderRouter.delete("/orders/:id", deleteOrder);

