



const CreatorCard = ( {img, name, sales, index}) => {
    const conditions = () =>{ 
        if(index < 6){
            return(
                'xs:flex'
            )
        }
        if(index < 7){
            return(
                'md:flex'
            )
        }
        if(index < 13){
            return(
                'lg:flex'
            )
        }
    }

  return (
    <div className={`lg:w-[240px] w-[300px] lg:h-[238px] h-[80px] bg-dimGray lg:my-[1rem] mt-0 rounded-3xl relative ${conditions()} hidden lg:flex-col flex-row items-center justify-center`}>
        <div className='absolute top-2 left-2 bg-gray rounded-full w-[30px] h-[30px]'>
            <div className='flex justify-center items-center p-1'>
                {index}
            </div>
        </div>
        <img className='lg:w-[120px] w-[60px] lg:h-[120px] h-[60px]'
            src={img}
            alt="image1" />
        <div className='flex flex-col lg:items-center items-start justify-center lg:ml-0 ml-3'>
            <h1 className='text-[22px] text-white text-semibold'>
                {name}
            </h1>
            <p className='text-[16px] text-purple'>
                Total Sales: <span className='text-white '>{sales}  ETH</span>
            </p>
        </div>
    </div>
  )
}

export default CreatorCard