import React from 'react'
import mny from './images/mny.png'
import Image from 'next/image'
import MoneyShare from '@/componets/MoneyShare'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen items-center justify-center'>
      <div className='shadow-xl rounded-1xl p-8 w-full max-w-xl'>
        <h1 className='text-3xl font-bold  text-center text-blue-500'>
          Money Share Calculator
        </h1>
        <h3 className='text-xl font-bold text-center text-blue-500 mt-4'>
          คำนวณเงินที่ต้องการหารกัน
        </h3>
        <Image className='mx-auto mt-4' src={mny} alt='money' width={100} height={100} />
        <MoneyShare />
      </div>
      <h3 className='mt-8 font-bold text-xl'>
        Deverloped by <span>KAKASUPERSAVAGE</span>
      </h3>
    </div>
  )
}
