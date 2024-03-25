export interface ProductModel {
    id: number;
    title: string;
    categoryId: number;
    discountPercentage: number;
    price: number;
    thumbnail: string | null;
    description: string | null;
}

export interface ProductResponseModel {
    products: ProductModel[];
    limit: number;
    skip: number;
    total: number;
}