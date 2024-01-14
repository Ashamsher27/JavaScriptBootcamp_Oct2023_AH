//cartmodel.ts

export interface CartItems {
    id: string, 
    product: string, 
    price: number, 
    quantity: number,
}

export interface CartFilters {
    maxPrice?: number;
    prefix?: string;
    pageSize?: number;
}