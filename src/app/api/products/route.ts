import { ProductList } from "@/types/product"

export async function GET() {
  const dataProducts: ProductList = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Sản phẩm ${index + 1}`,
    price: Math.floor(Math.random() * 30000000) + 1000000,
    description: `Mô tả chi tiết cho sản phẩm ${index + 1}`,
    image: `/images/products/product-${index + 1}.jpg`,
    category: Math.floor(Math.random() * 4) + 1, // Thay đổi category thành số ID
    brand: ['Apple', 'Samsung', 'Dell', 'HP', 'Lenovo', 'Asus'][Math.floor(Math.random() * 6)],
    stock: Math.floor(Math.random() * 100) + 1,
    rating: Number((Math.random() * 2 + 3).toFixed(1)),
    reviews: Math.floor(Math.random() * 500),
    discount: Math.random() > 0.7 ? Math.floor(Math.random() * 30) : 0,
    isNew: Math.random() > 0.7,
    isBestSeller: Math.random() > 0.8,
    createdAt: new Date(Date.now() - Math.floor(Math.random() * 90) * 24 * 60 * 60 * 1000),
    updatedAt: new Date()
  }))

  return Response.json(dataProducts)
}