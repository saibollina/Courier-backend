import { Router} from 'express';
import bodyParser from 'body-parser';

import { findAll, findOne, create, deleteUser,deleteAll,update, findByEmail, getAllDeliveryPersons, updateStatus } from "../controller/user.controller.js";

export const userRouter = Router();

userRouter.get('/users', findAll);
userRouter.get('/users/:id',  findOne);
userRouter.get('/users/email/:email',  findByEmail);
userRouter.post('/users',create)
userRouter.delete("/users/:id", deleteUser);
userRouter.delete("/users/", deleteAll);
userRouter.put("/users/:id", update);
userRouter.put("/users/updateStatus/:id", updateStatus);
userRouter.get('users/deliveryPersons', getAllDeliveryPersons)