import { useEffect, useState } from 'react';
import { IProduct } from '../types/GlobalTypes';
import BookCard from '../components/BookCard';

function AllBooks() {
    const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    void fetch('./data.json')
      .then((res) => res.json())
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      .then((data) => setData(data));
  }, []);

    return (
        <div className='mx-20 lg:mt-32 mt-24'>
        <h2 className='text-green-500 font-mono text-center text-xl mb-2'>Latest</h2>
                    <h2 className='text-3xl text-center font-bold -mb-6'>All Books</h2>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 my-20 gap-x-8 gap-y-8 '>
                    
                    {data.map((item) => (
                <BookCard item={item} key={item._id}></BookCard>
              
            ))}
                </div>
        </div>
            );
}

export default AllBooks