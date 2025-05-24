import React from 'react'
import TopFooter from './TopFooter'
import Image from 'next/image'
import Certificate from '../../../public/images/certificate.png'

export default function Footer() {
  return (
    <footer>
      <TopFooter />
      <div className='bg-[url("/images/bg-footer.jpg")] bg-cover '>
        <div className='bg-white/70 w-full h-full py-16 text-[#013065]'>
          <div className='container'>
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
          </div>
        </div>
      </div>
    </footer>
  )
}
