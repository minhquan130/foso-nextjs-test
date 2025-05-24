import { ProductList } from "@/types/product"

export async function GET() {
  const dataProducts: ProductList = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262) ${index + 1}`,
    price: Math.floor(Math.random() * 30000000) + 1000000,
    description: `Mô tả chi tiết cho sản phẩm ${index + 1}`,
    image: `/images/product-${Math.floor(Math.random() * 5) + 1}.png`,
    category: Math.floor(Math.random() * 4) + 1, // Thay đổi category thành số ID
    brand: ['Apple', 'Samsung', 'Dell', 'HP', 'Lenovo', 'Asus'][Math.floor(Math.random() * 6)],
    stock: Math.floor(Math.random() * 100) + 1,
    rating: Number((Math.random() * 2 + 3).toFixed(1)),
    reviews: Math.floor(Math.random() * 500),
    discount: Math.floor(Math.random() * 31) + 10,
    isNew: Math.random() > 0.7,
    isBestSeller: Math.random() > 0.8,
    createdAt: new Date(Date.now() - Math.floor(Math.random() * 90) * 24 * 60 * 60 * 1000),
    updatedAt: new Date()
  }))

  return Response.json(dataProducts)
}