import React from 'react'
import Union from '../Assets/Union.svg'
import ExpandCollapse from './ExpandCollapse'

const Section2 = () => {
  return (
    <div className='mt-32 bg-[#E8EEE7] rounded-3xl h-[500px] flex flex-row gap-8'>
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

        <div className='w-[50%] flex items-center justify-center'>
            <div className='flex flex-col gap-4 w-[80%]'>
                <div className='flex-flex-col gap-2'>
                    <ExpandCollapse 
                        headingText={"Do you offer freelancers?"}
                        bottomText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                </div>

                <div className='flex-flex-col gap-2'>
                    <ExpandCollapse 
                        headingText={"What’s the guarantee that I will be satisfied with the hired talent?"}
                        bottomText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                </div>

                <div className='flex-flex-col gap-2'>
                    <ExpandCollapse 
                        headingText={"Can I hire multiple talents at once?"}
                        bottomText={"If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."}
                    />
                </div>

                <div className='flex-flex-col gap-2'>
                    <ExpandCollapse 
                        headingText={"Why should I not go to an agency directly?"}
                        bottomText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                </div>

                <div className='flex-flex-col gap-2'>
                    <ExpandCollapse 
                        headingText={"Who can help me pick a right skillset and duration for me?"}
                        bottomText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Section2