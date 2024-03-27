export interface ProductModel {
    id: number;
    name: string;
    categoryId: number;
    categoryName: string;
    discount: number;
    price: number;
    imageUrl: string | null;
    description: string | null;
    inStock: boolean;
}

// export interface ProductResponseModel {
//     products: ProductModel[];
//     limit: number;
//     skip: number;
//     total: number;
// }