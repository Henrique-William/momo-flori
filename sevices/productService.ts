import api from "./api";

export interface Product {
    _id: string,
    title: string,
    biotanicalName: string,
    color: string,
    image: string,
    subtitle: string,
    category: string,
    description: string,
    rating: number,
    price: number,
    isLiked: boolean
}

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await api.get<Product[]>('/products');
    return response.data;
    }catch(error) {
        console.error('erro em buscar produtos:', error);
        throw error;
    }
}