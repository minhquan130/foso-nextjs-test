import React from 'react'
import TopFooter from './TopFooter'
import Image from 'next/image'
import Certificate from '../../../public/images/certificate.png'
import ButtonStore1 from '../../../public/images/button-app-store-1.png'
import ButtonStore2 from '../../../public/images/button-app-store-2.png'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <TopFooter />
      <div className='bg-[url("/images/bg-footer.jpg")] bg-cover '>
        <div className='bg-white/70 w-full h-full py-16 text-[#013065]'>
          <div className='container flex justify-between'>
            <div className='flex flex-col gap-8'>
              <h3 className='uppercase font-bold'>Viet Hung Auto Production Trading Joint Stock Companys</h3>
              <p className='flex flex-col'>
                <span>Tax code: 0305094228</span>
                <span>Address: 13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet Nam.</span>
                <span>Phone number: 0283 760 7607</span>
                <span>Opening hour: 09:00 - 22:00 from Mon - Fri</span>
              </p>
              <Image src={Certificate} alt='certificate' width={200} />
            </div>

            <div className='flex flex-col gap-8'>
              <h3 className='uppercase font-bold'>Sitemap</h3>
              <p className='flex flex-col'>
                <span>About</span>
                <span>Article</span>
                <span>Cart</span>
                <span>Contact</span>
              </p>
            </div>

            <div className='flex flex-col gap-8'>
              <h3 className='uppercase font-bold'>Legal</h3>
              <p className='flex flex-col'>
                <span>Privacy policy</span>
                <span>Cookie policy</span>
                <span>Delivery policy</span>
                <span>FAQs</span>
              </p>
            </div>

            <div className='flex flex-col gap-8'>
              <h3 className='uppercase font-bold'>Download App</h3>
              <div className='flex flex-col gap-4'>
                <Link href={'/'}>
                  <Image src={ButtonStore1} alt='certificate' width={200} />
                </Link>
                <Link href={'/'}>
                  <Image src={ButtonStore2} alt='certificate' width={200} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
