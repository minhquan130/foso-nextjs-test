export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: number;
    brand: string;
    stock: number;
    rating: number;
    reviews: number;
    discount: number;
    isNew?: boolean;
    isBestSeller?: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export type ProductList = Product[];
