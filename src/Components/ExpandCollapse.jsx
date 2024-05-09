import React, { useState } from 'react'
import Plus from '../Assets/plus.svg'
import Minus from '../Assets/minus.svg'

const ExpandCollapse = ({headingText, bottomText}) => {

    const [expanded, setExpanded] = useState(false)

    const toggleExpand = () => {
        setExpanded(!expanded);
    }

  return (
    <div className='flex-flex-col gap-2'>
        <div className='flex justify-between cursor-pointer' onClick={toggleExpand}>
            <p className='font-semibold text-xl text-[#1C1C1C] w-[70%]'>
                {headingText}
            </p>
            <div className='w-[30%] flex items-center justify-end'>
                <img src={expanded ? Minus : Plus} alt='img' 
                    className='h-[14px] w-[14px] '
                />
            </div>
        </div>
        {expanded && (
                <div className='text-[#617275] text-base'>
                    {bottomText} 
                </div>
        )}

        <div className='border border-[#D7D7D7] mt-4'>
        </div>
    </div>
  )
}

export default ExpandCollapse