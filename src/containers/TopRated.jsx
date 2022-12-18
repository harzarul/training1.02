
import { Button2, CreatorCard } from "../components"
import { Creators } from "../constants"
import styles from "../styles"

const TopRated = () => {
  return (
    <section className="flex flex-col items-start justify-start my-[4rem]">
      <div className="flex justify-between items-end w-full">
        <div className="flex flex-col items-start justify-start">
          <h1 className="sm:text-[38px] text-[30px] text-white">
            Top Creators
          </h1>
          <p className="sm:text-[22px] text-[16px] text-white">
            Checkout Top Rated Creators On The NFT Marketplace
          </p>
        </div>
        <div className="hidden lg:flex">
          <Button2 title='View Ranking'/>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-rows-3  gap-2 w-full">
        {Creators.map((creator,index) => (
          <CreatorCard key={creator.id}
            img={creator.img}
            name={creator.name}
            sales={creator.sales}
            index={index + 1}/>
        ))}
      </div>
       <div className="flex lg:hidden mt-[2rem]">
          <Button2 title='View Ranking'/>
        </div>
    </section>
  )
}

export default TopRated