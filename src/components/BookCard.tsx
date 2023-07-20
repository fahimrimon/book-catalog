import{ useState } from 'react'
import { MdOutlineWatchLater } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { IProduct } from '../types/GlobalTypes';

interface IProps {
    item: IProduct;
  }

function BookCard({item}:IProps) {
    const [style, setStyle] = useState({display: 'none'});
    return (
        <div>
            <div className="card lg:card-side bg-base-100 border border-light rounded-sm"  style={{backgroundColor: 'white'}}    onMouseEnter={e => {
                     setStyle({display: 'block'});
                 }}
                 onMouseLeave={e => {
                     setStyle({display: 'none'})
                 }}>
                <figure className='w-full lg:w-24 p-2'><img className='transition duration-700 hover:scale-95 w-32 h-36' src={item.image} alt="img" /></figure>
                    <div className="card-body">
                         <p className="text-2xl font-serif hover:text-orange-500">{item.name}</p>
                         <p className='text-sm text-gray-500 font-semibold'>{item.author}</p>
                         <div className='mt-3 flex justify-between items-center'>
                         <p className=' text-gray-700 font-semibold w-full'><span>{item.genre}</span></p>
                         <p className='flex items-center space-x-2'><span className='text-lg'><MdOutlineWatchLater /></span><span>{item.publicationYear}</span></p>
                         </div>
                         
                         <div className='mt-3 flex justify-between items-center mt-8'>
                         <p className='text-xl text-blue-500 w-40'><BsBook /></p>
                         <p className='text-xl text-orange-500'><AiOutlineHeart /></p>
                         </div>
  
                     {/* <div className="card-actions justify-end ">
                      <button  style={style} className="py-1 px-4 bg-green-500 hover:bg-black hover:text-white rounded-none border-none -mt-6 -mb-5 rounded">Book Now</button>
               </div> */}
             </div>
            </div>
        </div>
    );
}

export default BookCard
