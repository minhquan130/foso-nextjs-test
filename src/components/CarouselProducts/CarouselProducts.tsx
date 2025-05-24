'use client'

import { Product } from '@/types/product'
import { formatCurrency } from '@/utils/formatCurrency'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function CarouselProducts() {
    const [products, setProducts] = useState<Product[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const itemsPerPage = 5

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}api/products`)
                if (!res.ok) {
                    throw new Error(`API failed: ${res.statusText}`)
                }
                const data = await res.json()
                setProducts(data)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }
        fetchProducts()
    }, [])

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - itemsPerPage : prevIndex - 1
        )
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === products.length - itemsPerPage ? 0 : prevIndex + 1
        )
    }

    const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage)

    return (
        <div className='relative flex gap-x-4 overflow-hidden px-2'>
            <button
                onClick={handlePrev}
                className='absolute top-1/2 -translate-y-1/2 bg-[#CDE4FE] p-2 rounded-full left-0 opacity-70 hover:opacity-100 transform duration-150'
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L9 12L15 19" stroke="#013065" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            {visibleProducts.map((product: Product) => {
                const newPrice = formatCurrency(product.price * (100 - product.discount) / 100);
                const oldPrice = formatCurrency(product.price);
                return (
                    <div
                        key={product.id}
                        className='bg-white min-w-[calc(20%-24px)] p-4 font-bold rounded-lg flex flex-col gap-2'
                    >
                        <Image src={product.image} alt='product' width={250} height={250} className='h-[250px] w-[250px]' />
                        <span className='line-clamp-2'>{product.name}</span>
                        <span className='text-[#B71D18]'>{newPrice}</span>
                        <del className='text-[#919EAB]'>{oldPrice}</del>
                        <button className='bg-[#E6F1FF] text-[#025FCA] rounded-lg p-2'>Mua ngay</button>
                    </div>
                )
            })}
            <button
                onClick={handleNext}
                className='absolute top-1/2 -translate-y-1/2 bg-[#CDE4FE] p-2 rounded-full right-0 opacity-70 hover:opacity-100 transform duration-150'
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.51192 4.43057C8.82641 4.161 9.29989 4.19743 9.56946 4.51192L15.5695 11.5119C15.8102 11.7928 15.8102 12.2072 15.5695 12.4881L9.56946 19.4881C9.29989 19.8026 8.82641 19.839 8.51192 19.5695C8.19743 19.2999 8.161 18.8264 8.43057 18.5119L14.0122 12L8.43057 5.48811C8.161 5.17361 8.19743 4.70014 8.51192 4.43057Z" fill="#013065" />
                </svg>
            </button>
        </div>
    )
}
