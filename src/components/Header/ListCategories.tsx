import { Category } from "@/types/category"

export default async function ListCategories() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/categories`)
    if (!res.ok) {
        throw new Error(`API failed: ${res.statusText}`)
    }
    const categories = await res.json()

    return (
        <div className="flex shadow-2xl">
            <ul className="flex-[3]">
                {categories && categories.data.map((cat: Category) => (
                    <li key={cat.id} className="flex items-center justify-between p-4 bg-white hover:bg-[#F4F6F8] cursor-pointer border-l-4 border-white hover:border-[#0D57C6]">
                        <span className="flex items-center gap-2">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={cat.image} alt="category" />
                            {cat.name}
                        </span>
                        <i>
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.66792 2.58449C5.85138 2.42724 6.12757 2.44849 6.28482 2.63194L9.78482 6.71528C9.92525 6.87912 9.92525 7.12088 9.78482 7.28472L6.28482 11.3681C6.12757 11.5515 5.85138 11.5728 5.66792 11.4155C5.48447 11.2583 5.46322 10.9821 5.62047 10.7986L8.87642 7L5.62047 3.20139C5.46322 3.01793 5.48447 2.74174 5.66792 2.58449Z" fill="#1C252E" />
                            </svg>
                        </i>
                    </li>
                ))}
            </ul>
            <div className="flex-[9] p-4">
                Hello
            </div>
        </div>
    )
}
