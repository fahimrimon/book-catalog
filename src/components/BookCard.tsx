import{ useState } from 'react'
import { IProduct } from '../types/GlobalTypes';

interface IProps {
    item: IProduct;
  }

function BookCard({item}:IProps) {
    const [style, setStyle] = useState({display: 'none'});
    return (
        <div>
         
            <div className="card lg:card-side bg-base-100 border  border-light rounded-sm "  style={{backgroundColor: 'white'}}    onMouseEnter={e => {
                     setStyle({display: 'block'});
                 }}
                 onMouseLeave={e => {
                     setStyle({display: 'none'})
                 }}>
                <figure className=' w-36 p-2'><img className='transition duration-700 hover:scale-95 w-32 h-32' src={item.image} alt="img" /></figure>
                    <div className="card-body">
                         <h2 className="text-xl font-serif hover:text-lime-500">{item.name}</h2>
                       <p className='text-xl'>৳ <span className='text-sm'>{item.author}</span></p>
  
                     <div className="card-actions justify-end ">
                      <button  style={style} className="py-1 px-4 bg-green-500 hover:bg-black hover:text-white rounded-none border-none -mt-6 -mb-5 rounded">Book Now</button>
               </div>
             </div>
            </div>
        </div>
    );
}

export default BookCard
