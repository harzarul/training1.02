
import { BiRocket } from 'react-icons/bi';

const Button = ({title}) => {
  return (
    <div className='flex justify-center items-center bg-purple rounded-full'>
        <div className='flex flex-row justify-between items-center px-[1.2rem] py-[.7rem]'>
            <BiRocket className='mr-2 text-[16px] text-white'/>
            <p className='text-white text-[16px] '>
                {title}
            </p>
        </div>
    </div>
  )
}

export default Button