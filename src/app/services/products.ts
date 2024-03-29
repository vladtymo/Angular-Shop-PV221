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

export interface CategoryModel {
    id: number;
    name: string;
}

export interface CreateProductModel {
    name: string;
    categoryId: number;
    discount: number;
    price: number;
    description: string | null;
    inStock: boolean;
    image: File | null;
}

// export interface ProductResponseModel {
//     products: ProductModel[];
//     limit: number;
//     skip: number;
//     total: number;
// }