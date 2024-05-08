import React from 'react'
import Girl from '../Assets/girl.png'
import Spark from '../Assets/spark.svg'
import Fly from '../Assets/fly.svg'
import Arrow from '../Assets/arrow.svg'
import Button from './Button'

const Section1 = () => {
  return (
    <div className='w-full flex flex-col gap-16 items-center'>
        <div className='w-[50%] flex flex-col gap-2 items-center'>
            <div className='font-grace font-normal text-4xl text-[#2DA950]'>
                Success stories
            </div>
            <div className='font-semibold text-6xl text-[#1C1C1C] text-center'>
                Every success journey we’ve encountered.
            </div>
        </div>
        
        <div className='w-full flex gap-2'>
            <div className='w-[50%] relative'>
                <img src={Girl} alt='img' 
                    className='rounded-3xl absolute top-0 right-0 h-[400px] w-[380px] -z-10'
                />
                
                <div className='absolute top-16 left-12 z-10'>
                    <div className='h-48 w-52 bg-white rounded-2xl relative'>
                        <img src={Spark} alt='img' 
                            className='absolute -top-7 -left-5'
                        />
                        <p className='font-semibold text-5xl text-[#1C1C1C] absolute top-8 left-6'>
                            40%
                        </p>
                        <p className='text-md font-semibold text-[#828282] absolute bottom-2 left-2 right-2'>
                            Achieved reduction in project execution time by optimising team availability
                        </p>
                    </div>
                </div>

                <div className='flex gap-4 p-4 bg-white w-fit rounded-full absolute top-72 left-24'>
                    <div className='h-[52px] w-[52px] rounded-full bg-[#DDEFE0] flex items-center justify-center'>
                        <img src={Fly} alt='img' className='h-8'/>
                    </div>

                    <div className=''>
                        <p className='font-bold text-2xl text-[#1C1C1C]'>
                            10 DAYS
                        </p>
                        <p className='font-medium text-base text-[#828282]'>
                            Staff Deployment
                        </p>
                    </div>
                    
                </div>

                <div className='rounded-3xl bg-[#002E18] w-72 z-50 absolute -right-20 top-72 p-4'>
                    <div className='font-medium text-6xl text-white'>
                        $0.5 <span className='text-3xl text-[#A6A3A0]'>MILLION</span>
                    </div>

                    <div className='font-medium text-lg text-[#CCCCCC]'>
                        Reduced client expenses by saving on hiring and employee costs.
                    </div>
                </div>
                
            </div>

            <div className='w-[50%] flex flex-col gap-12 items-center'>
                <div className='font-semibold text-4xl text-[#1C1C1C] w-[398px]'>
                    Enhance fortune 50 company’s insights teams research capabilities
                </div>

                <div className='flex gap-2'>
                    <div className='h-[10.75px] w-[10.75px] rounded-full bg-[#2DA950] hover:cursor-pointer'></div>
                    <div className='h-[10.75px] w-[10.75px] rounded-full bg-[#E4E3E3] hover:bg-[#CAD0CB] hover:cursor-pointer'></div>
                    <div className='h-[10.75px] w-[10.75px] rounded-full bg-[#E4E3E3] hover:bg-[#CAD0CB] hover:cursor-pointer'></div>
                </div>
                <div className='mt-12'>
                    <Button isActive={true} linkto={"/"}>
                        <div className='flex gap-2'>
                            <p>Explore More</p>
                            <img src={Arrow} alt='img' />
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section1