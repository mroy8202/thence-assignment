import React from 'react'
import Union from '../Assets/Union.svg'

const Section2 = () => {
  return (
    <div className='mt-32 bg-[#E8EEE7] rounded-3xl h-[500px]'>
        <div className='w-[50%] flex flex-col relative'>
            <div className='ml-16 mt-16 mb-16'>
                <div className='font-grace font-normal text-2xl text-[#9E9D9D]'>
                    What’s on your mind
                </div>
                <div className='font-semibold text-5xl text-[#1C1C1C]'>
                    Ask Questions
                </div>
            </div>
            
            <div className='absolute top-48'>
                <img src={Union} alt='img'  
                    className='h-80'
                />
            </div>
        </div>

        <div></div>
    </div>
  )
}

export default Section2