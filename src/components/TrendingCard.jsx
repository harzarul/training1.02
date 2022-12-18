


const TrendingCard = ({ img1, img2, img3, img99, title, icon, name, index }) => {
    const conditions = () =>{ 
        if(index === 0){
            return(
                'xs:flex flex'
            )
        }
        if(index === 1){
            return(
                'md:flex'
            )
        }
        if(index === 2){
            return(
                'lg:flex'
            )
        }
    }

  return (
    <div className={`hidden ${conditions()} flex-col items-start justify-start`}>
        <img className="w-[330px] h-[330px] mb-[1rem]"
            src={img1}
            alt="topImg" />

        <div className="flex flex-row justify-between items-start w-[330px]">
            <img className="w-[100px] h-[100px]"
                src={img2}
                alt="imgbtm1" />
            <img className="w-[100px] h-[100px]"
                src={img3}
                alt="imgbtm2" />
            <img className="w-[100px] h-[100px]"
                src={img99}
                alt="imgbtm3" />
        </div>

        <div className="flex flex-col items-start justify-start my-2">
            <h1 className="text-[22px] text-white font-semibold my-2">
                {title}
            </h1>
            <div className="flex flex-row justify-start items-start">
                <img className="h-[24px] w-[24px] rounded-full mr-[1.2rem]"
                    src={icon}
                    alt="icon" />
                <p className="text-white text-[14px]">
                    {name}
                </p>
            </div>
        </div>
    </div>
  )
}

export default TrendingCard