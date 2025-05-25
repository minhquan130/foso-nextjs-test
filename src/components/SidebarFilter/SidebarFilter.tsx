'use client'

import { useState } from 'react'
// import { ChevronDown, Filter } from 'lucide-react'

const categories = [
    { label: 'Lọc gió Động cơ - Air Filter', checked: true },
    { label: 'Lọc Nhiên Liệu - Fuel Filter', checked: true },
    { label: 'Bộ lọc dầu', checked: true },
    { label: 'Chưa phân loại', checked: false },
    { label: 'Khác', checked: false },
]

const prices = [
    'Dưới 100,000 đ',
    '100,000 đ - 300,000 đ',
    '300,000 đ - 500,000 đ',
    'Trên 500,000 đ',
]

const brands = ['Asakashi', 'Bosch', 'Huyndai']
const years = ['2021', '2020', '2019', '2018']
const origins = ['Đức', 'Nhật Bản', 'Trung Quốc']

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="border-b">
            <div className="flex items-center justify-between py-4 font-semibold">
                <span>{title}</span>
                <i>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 15.8003L12 9.80029L5 15.8003" stroke="#1C252E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </i>
            </div>
            <div className="space-y-2 pb-4">{children}</div>
        </div>
    )
}

export default function SidebarFilter() {
    const [selectedCategories, setSelectedCategories] = useState(categories)

    return (
        <div className="rounded-xl border bg-white p-4 w-full">
            <div className="flex items-center gap-2 text-[#025FCA] text-lg font-semibold mb-2">
                <i>
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.66675 4.80029H25.3334L11.7542 18.3795C11.5413 17.8255 11.2 17.3499 10.7168 16.9304C10.413 16.6667 9.9887 16.4278 9.14014 15.9501L5.2561 13.7637C3.99138 13.0517 3.35902 12.6958 3.01288 12.1222C2.66675 11.5486 2.66675 10.8567 2.66675 9.47293V8.55317C2.66675 6.78405 2.66675 5.89949 3.25253 5.34989C3.83832 4.80029 4.78113 4.80029 6.66675 4.80029Z" fill="#025FCA" />
                        <path opacity="0.5" d="M29.3331 9.47293V8.55317C29.3331 6.78405 29.3331 5.89949 28.7473 5.34989C28.1615 4.80029 27.2187 4.80029 25.3331 4.80029L11.7539 18.3795C11.8197 18.5508 11.8733 18.7296 11.915 18.9165C11.9997 19.2966 11.9997 19.7414 11.9997 20.6309L11.9997 24.1902C11.9997 25.4029 11.9997 26.0093 12.3356 26.482C12.6715 26.9547 13.2681 27.1879 14.4613 27.6544C16.9661 28.6336 18.2185 29.1232 19.1091 28.5661C19.9997 28.0091 19.9997 26.7361 19.9997 24.1902V20.6309C19.9997 19.7414 19.9997 19.2966 20.0845 18.9165C20.261 18.125 20.6504 17.4796 21.2831 16.9304C21.5868 16.6667 22.0111 16.4278 22.8597 15.9501L26.7437 13.7637C28.0084 13.0517 28.6408 12.6958 28.9869 12.1222C29.3331 11.5486 29.3331 10.8567 29.3331 9.47293Z" fill="#025FCA" />
                    </svg>
                </i>
                <span>Bộ Lọc</span>
            </div>

            <Section title="Danh mục sản phẩm">
                {selectedCategories.map((item, idx) => (
                    <label key={idx} className="flex items-center gap-2 text-sm">
                        <input
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => {
                                const updated = [...selectedCategories]
                                updated[idx].checked = !updated[idx].checked
                                setSelectedCategories(updated)
                            }}
                            className="accent-[#025FCA]"
                        />
                        <span>{item.label} <span className="text-gray-500">(24)</span></span>
                    </label>
                ))}
            </Section>

            <Section title="Khoảng giá">
                {prices.map((price, idx) => (
                    <button
                        key={idx}
                        className="w-full text-left text-sm border px-3 py-2 rounded-md hover:bg-[#025FCA]/10"
                    >
                        {price}
                    </button>
                ))}
            </Section>

            <Section title="Thương hiệu">
                {brands.map((brand, idx) => (
                    <label key={idx} className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="accent-[#025FCA]" />
                        <span>{brand} <span className="text-gray-500">(24)</span></span>
                    </label>
                ))}
            </Section>

            <Section title="Năm sản xuất">
                {years.map((year, idx) => (
                    <label key={idx} className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="accent-[#025FCA]" />
                        <span>{year} <span className="text-gray-500">(24)</span></span>
                    </label>
                ))}
            </Section>

            <Section title="Xuất xứ">
                {origins.map((origin, idx) => (
                    <label key={idx} className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="accent-[#025FCA]" />
                        <span>{origin} <span className="text-gray-500">(24)</span></span>
                    </label>
                ))}
            </Section>
        </div>
    )
}
