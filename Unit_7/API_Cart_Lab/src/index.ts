// index.ts
console.log('Starting server...');
import express from 'express';
import cors from 'cors';
import { cartRoutes } from './cart';
import { cart } from './cart';
import { CartFilters, CartItems } from './models/cartmodel';

const app = express();

app.use(cors());
app.use(express.json());

// Use the cartRoutes for the "/cart" endpoint
app.use('/cart', cartRoutes);

const port = 3000;

// Define the route handler for GET /cart-items
app.get('/cart-items', (req, res) => {
    const { maxPrice, prefix, pageSize } = req.query as CartFilters;
    
    // Filter cart items based on query parameters
    let filteredCart = cart;
  
    if (maxPrice !== undefined && !isNaN(maxPrice)) { 
        filteredCart = filteredCart.filter(item => item.price <= maxPrice);
    }
  
    if (prefix) {
        filteredCart = filteredCart.filter(item => item.product.startsWith(prefix));
    }
  
    if (pageSize !== undefined && !isNaN(pageSize) && pageSize > 0) {
        filteredCart = filteredCart.slice(0, pageSize);
    }
  
    // Send the filteredCart to JSON response
    res.status(200).json(filteredCart);
});

app.get('/cart-items/:id', (req, res) => {
    const itemId = req.params.id;

    // Find the cart item with the specified ID
    const foundID = cart.find(item => item.id === itemId);

    if (!foundID) {
        // If no item is found, return a 404 response
        return res.status(404).json({ error: 'ID Not Found' });
    }

    // Send the foundItem as a JSON response
    res.status(200).json(foundID);
});

app.post('/cart-items', (req, res) => {
    const { product, price, quantity } = req.body as CartItems;

    const id = uniqueIDGenerator();

    const newItem: CartItems = {
        id,
        product,
        price,
        quantity,
    };

    cart.push(newItem);

    res.status(201).json(newItem); // Return the added cart item as JSON
});

function uniqueIDGenerator(): string {
    const lastUsedId = Math.max(...cart.map(item => parseInt(item.id))) || 0;
    const nextId = lastUsedId + 1;
    return nextId.toString();
}

app.put('/cart-items/:id', (req, res) => {
    const itemId = req.params.id;
    const { product, price, quantity } = req.body as CartItems;

    // Find the item in the cart array based on its ID
    const updatedItemIndex = cart.findIndex(item => item.id === itemId);

    // If the item is found, update its properties
    if (updatedItemIndex !== -1) {
        cart[updatedItemIndex] = {
            id: itemId,
            product,
            price,
            quantity,
        };

        res.status(200).json('Item updated successfully!');
    } else {
        res.status(404).json('Item not found!');
    }
});

app.delete('/cart-items/:id', (req, res) => {
    const itemId = req.params.id;
    const { product, price, quantity } = req.body as CartItems;

    // Find the item in the cart array based on its ID
    const deletedItemIndex = cart.findIndex(item => item.id === itemId);

    // If the item is found, update its properties
    if (deletedItemIndex !== -1) {
        cart.splice(deletedItemIndex, 1);
        res.status(200).json('Item deleted successfully!');
    } else {
        res.status(404).json('Not Found - Item not found!');
    }
});

app.listen(port, () => console.log(`Listening on port: ${port}.`));