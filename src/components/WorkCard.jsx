import React from 'react'

const WorkCard = ({ img, head, text}) => {
  return (
    <div className='flex md:flex-col flex-row items-center justify-start py-5 px-[2rem] bg-dimGray lg:w-[330px] md:w-[210px] w-[315px] lg:h-[439px] md:h-[337px] h-[157px] mt-[2rem] rounded-3xl'>
        <img className='lg:w-[250px] md:w-[160px] w-[100px] lg:h-[250px] md:h-[160px] h-[100px] rounded-full'
            src={img} 
            alt="image1" />
        <div className='flex flex-col items-start justify-start'>
            <h1 className='lg:text-[22px] text-[16px] text-white capitalize'>
                {head}
            </h1>
            <p className='lg:text-[14px] text-[12px] text-white'>
                {text}
            </p>
        </div>
    </div>
  )
}

export default WorkCard