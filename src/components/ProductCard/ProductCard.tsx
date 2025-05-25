import { Product } from '@/types/product'
import { formatCurrency } from '@/utils/formatCurrency';
import { formatDiscount } from '@/utils/formatDiscount';
import Image from 'next/image';
import React from 'react'

export default function ProductCard({ product, span = 5 }: { product: Product, span: number }) {
    const newPrice = formatCurrency(product.price * (100 - product.discount) / 100);
    const oldPrice = formatCurrency(product.price);
    const discount = formatDiscount(product.discount);
    return (
        <div
            key={product.id}
            className={`bg-white min-w-[calc(${100 / span}%-24px)] p-4 rounded-lg flex flex-col gap-2`}
        >
            <Image src={product.image} alt='product' width={250} height={250} className='h-[250px] w-[250px]' />
            <span className='line-clamp-2 font-bold'>{product.name}</span>
            <span className='text-[#B71D18] font-bold'>{newPrice}</span>
            <div className='text-sm flex gap-2'>
                <del className='text-[#919EAB]'>{oldPrice}</del>
                <span className='text-[#B71D18]'>{discount}%</span>
            </div>
            <button className='bg-[#E6F1FF] text-[#025FCA] rounded-lg p-2'>Mua ngay</button>
        </div>
    )
}








