
import { RxDiscordLogo } from 'react-icons/rx';
import { AiOutlineYoutube, AiOutlineTwitter, AiOutlineInstagram, AiOutlineCopyrightCircle } from 'react-icons/ai';
import { Button } from '../components';


const Footer = () => {
  return (
    <footer className='flex flex-col items-start justify-center py-[1.3rem]'>
      <div className='flex lg:flex-row flex-col justify-between items-start w-full border-b-[2px] border-dimGray'>
        <div className='flex flex-col items-start justify-start mb-3'>
          <h1 className='text-[22px] text-white capitalize font-bold mb-[2rem]'>
            NFT Marketplace
          </h1>
          <p className='text-[16px] text-white mb-3'>
            NFT marketplace UI created with Anima for Figma.
          </p>
          <p className='text-[16px] text-white mb-3'>
            Join our community
          </p>
          <div className='flex justify-start items-center text-[purple]'>
            <RxDiscordLogo className='w-[32px] h-[32px] text-bold mr-2'/>
            <AiOutlineYoutube className='w-[32px] h-[32px] text-bold mr-2'/>
            <AiOutlineTwitter className='w-[32px] h-[32px] text-bold mr-2'/>
            <AiOutlineInstagram className='w-[32px] h-[32px] text-bold mr-2'/>
          </div>
        </div>
        <div className='flex flex-col items-start justify-start mb-3'>
          <h1 className='text-[22px] text-white capitalize  font-bold mb-[2rem]'>
            Explore
          </h1>
          <div className='flex-col items-start justify-start'>
            <p className='text-[16px] text-white mb-3'>
              Marketplace
            </p>
            <p className='text-[16px] text-white mb-3'>
              Rankings
            </p>
            <p className='text-[16px] text-white mb-3'>
              Connect a wallet
            </p>
          </div>
        </div>
        <div className='flex-col items-start justify-start mb-3'>
          <h1 className='text-[22px] text-white capitalize font-bold mb-[2rem]'>
            Join Our Weekly Digest
          </h1>
          <p className='text-[16px] text-white mb-3'>
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="flex lg:flex-row flex-col  justify-start lg:items-center items-start w-full">
            <input className="mr-[4rem] text-[16px] text-black px-4 py-2 rounded-xl lg:mb-0 mb-4 w-full"
              type="text"
              placeholder="Enter Your Email"/>
            <Button title='Subscribe'/>
          </div>
        </div>
      </div>

      <div className='flex items-start justify-start my-2'>
        <AiOutlineCopyrightCircle className='text-[12px] text-white mr-2'/>
        <h1 className='text-[12px] text-white'>
          NFT Market. Use this template freely
        </h1>
      </div>
    </footer>
  )
}

export default Footer