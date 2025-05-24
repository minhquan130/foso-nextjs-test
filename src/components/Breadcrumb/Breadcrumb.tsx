import React from 'react'

export default function Breadcrumb() {
    return (
        <div className='container flex items-center gap-4 py-8'>
            <span>
                Trang chủ
            </span>
            <i>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_5357_244)">
                        <path d="M3 1.6669L5 4.00023L3 6.33357" stroke="#919EAB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_5357_244">
                            <rect width="8" height="8" fill="white" transform="translate(0 0.000244141)" />
                        </clipPath>
                    </defs>
                </svg>
            </i>
            sản phẩm
        </div>
    )
}
