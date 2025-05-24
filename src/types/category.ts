export interface Category {
    id: number;
    name: string;
    slug: string;
    description?: string;
    parentId?: number;
    image?: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface CategoryResponse {
    data: Category[];
    total: number;
    page: number;
    limit: number;
}
