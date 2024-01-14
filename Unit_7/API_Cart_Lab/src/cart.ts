// cart.ts

import express from 'express';

import { CartItems } from './models/cartmodel';

const cartRoutes = express.Router();

const cart: CartItems[] = [
    { id: '1', product: 'New York Strip Steaks', price: 19.56, quantity: 2 },
    { id: '2', product: 'Pompeian Extra Virgin Olive Oil', price: 6.48, quantity: 1 },
    { id: '3', product: 'Celtic Seas Salt', price: 3.99, quantity: 1 },
    { id: '4', product: 'McCormick Black Pepper', price: 3.54, quantity: 1 },
    { id: '5', product: 'Unsalted Land O Lakes Butter', price: 6.28, quantity: 2 },
    { id: '6', product: 'Garlic Bulb Fresh', price: 0.66, quantity: 1 },
    { id: '7', product: 'Rosemary', price: 7.95, quantity: 1 },
  ];
  
  cartRoutes.get('/', (req, res) => {
    res.json(cart);
    console.log('After GET /cart request received');
});


export { cartRoutes };
export { cart };