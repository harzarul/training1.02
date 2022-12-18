
import { TrendingCard } from "../components";
import { TrendingData } from "../constants";
import styles from "../styles";

const Trending = () => {
  return (
    <section className='my-[7rem]'>
      <div className="flex flex-col items-start justify-start">
        <div className="flex flex-col items-start justify-start lg:mb-[4rem] mb-[2rem]">
          <h1 className="text-white sm:text-[38px] text-[30px] capitalize font-semibold">
            Trending Collection
          </h1>
          <p className="text-white sm:text-[22px] text-[18px] capitalize">
            Checkout our weekly updated trending collection.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 w-full">
          {TrendingData.map((data,index) => (
            <TrendingCard key={data.id}
            img1={data.img1}
            img2={data.img2}
            img3={data.img3}
            img99={data.img99}
            title={data.title}
            icon={data.icon}
            name={data.name}
            index={index}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trending