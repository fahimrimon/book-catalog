/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { IProduct } from "../types/GlobalTypes";
import { CiCircleRemove } from 'react-icons/ci';
import { MdOutlineWatchLater } from 'react-icons/md';
import { BsBook } from 'react-icons/bs';
import { removeFromWishlist } from "../redux/features/cart/cartSlice";

interface IProps {
    product: IProduct;
  }
function CartCard({product}:IProps) {
    const { _id}: IProduct = product;
    const dispatch = useAppDispatch();

  return (
    <div>
      <div className="card  bg-base-100 border border-light rounded-sm"  style={{backgroundColor: 'white'}}>
                <figure className='w-full  p-2'><img className='transition duration-700 hover:scale-95 w-[40%] h-52' src={product.image} alt="img" /></figure>
                    <div className="card-body">
                         <p className="text-2xl font-serif hover:text-orange-500">{product.name}</p>
                         <p className='text-sm text-gray-500 font-semibold'>{product.author}</p>
                         <div className='mt-1 flex justify-between items-center'>
                         <p className=' text-gray-700 font-semibold w-full'><span>{product.genre}</span></p>
                         <p className='flex items-center space-x-2'><span className='text-lg'><MdOutlineWatchLater /></span><span>{product.publicationYear}</span></p>
                         </div>
                         
                         <div className='flex justify-between items-center mt-4'>
                         <p title='Currently Reading' className='text-2xl text-blue-500 cursor-pointer'><BsBook /></p>
                         <Link to={`/book-details/${_id}`}>
                         <p className='px-4 text-base text-center border border-black rounded-full cursor-pointer'>Details</p>
                         </Link>
                         <p onClick={() => dispatch(removeFromWishlist(product))} title='Remove' className='text-2xl text-orange-500 cursor-pointer flex justify-end'><CiCircleRemove /></p>
                         </div>
  
                     {/* <div className="card-actions justify-end ">
                      <button  style={style} className="py-1 px-4 bg-green-500 hover:bg-black hover:text-white rounded-none border-none -mt-6 -mb-5 rounded">Book Now</button>
               </div> */}
             </div>
            </div>
    </div>
  )
}

export default CartCard
