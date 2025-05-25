import { Category } from "@/types/category"
import { Product } from "@/types/product"
import ProductCard from "../ProductCard"
import Link from "next/link"

export default async function ListCategories() {
    const resCate = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}api/categories`)
    const resPro = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}api/products`)
    if (!resCate.ok) {
        throw new Error(`API failed: ${resCate.statusText}`)
    }
    const categories = await resCate.json()

    if (!resPro.ok) {
        throw new Error(`API failed: ${resPro.statusText}`)
    }
    const products = await resPro.json()

    const productsByCategory = categories.data.map((cat: Category) => {
        return {
            category: cat,
            products: products.filter((prod: Product) => prod.category === cat.id).slice(0, 5)
        }
    });

    console.log(productsByCategory);


    return (
        <ul className="relative">
            {productsByCategory && productsByCategory.map((item: { category: Category, products: Product[] }, index: number) => (
                <div key={index} className="flex group/item">
                    <li className="flex relative w-1/4">
                        <div className="flex items-center justify-between p-4 bg-white hover:bg-[#F4F6F8] cursor-pointer border-l-4 border-white hover:border-[#0D57C6] flex-auto flex-[3]">
                            <span className="flex items-center gap-2">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={item.category.image} alt="category" />
                                {item.category.name}
                            </span>
                            <i>
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.66792 2.58449C5.85138 2.42724 6.12757 2.44849 6.28482 2.63194L9.78482 6.71528C9.92525 6.87912 9.92525 7.12088 9.78482 7.28472L6.28482 11.3681C6.12757 11.5515 5.85138 11.5728 5.66792 11.4155C5.48447 11.2583 5.46322 10.9821 5.62047 10.7986L8.87642 7L5.62047 3.20139C5.46322 3.01793 5.48447 2.74174 5.66792 2.58449Z" fill="#1C252E" />
                                </svg>
                            </i>
                        </div>
                    </li>
                    <div className={`flex-[9] absolute top-0 bottom-0 left-1/4 right-0 ${index !== 0 && 'hidden'} group-hover/item:block`}>
                        <div className="p-4 w-full">
                            <div className="flex justify-between items-center p-4">
                                <h3 className="text-2xl">Sản phẩm bán chạy</h3>
                                <div className="flex gap-2 items-center text-[#0373F3]">
                                    <span><Link href={'/'}>Xem tất cả</Link></span>
                                    <i>
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.12916 3.69204C6.39123 3.4674 6.7858 3.49775 7.01044 3.75983L12.0104 9.59316C12.2111 9.82722 12.2111 10.1726 12.0104 10.4067L7.01044 16.24C6.7858 16.5021 6.39123 16.5324 6.12916 16.3078C5.86708 16.0831 5.83673 15.6886 6.06136 15.4265L10.7127 9.99991L6.06136 4.57332C5.83673 4.31124 5.86708 3.91668 6.12916 3.69204ZM9.46265 3.69213C9.72473 3.46749 10.1193 3.49784 10.3439 3.75992L15.3439 9.59325C15.5446 9.82731 15.5446 10.1727 15.3439 10.4067L10.3439 16.2401C10.1193 16.5022 9.72473 16.5325 9.46265 16.3079C9.20057 16.0832 9.17022 15.6887 9.39486 15.4266L14.0462 10L9.39486 4.57341C9.17022 4.31133 9.20057 3.91677 9.46265 3.69213Z" fill="#0373F3" />
                                        </svg>
                                    </i>
                                </div>
                            </div>
                            <div className="grid grid-cols-5 gap-4">
                                {item.products.map((pro, index) => (
                                    <ProductCard key={index} product={pro} span={5} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </ul>
    )
}
