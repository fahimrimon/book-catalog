/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect, useState } from "react";
import { IProduct } from "../types/GlobalTypes";
import BookCard from "../components/BookCard";
import { useGetBooksQuery } from "../redux/features/book/bookApi";

function AllBooks() {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    data: allBooks,
    isLoading,
    isError,
    isSuccess,
  } = useGetBooksQuery(null);

  // const [data, setData] = useState<IProduct[]>([]);
  // useEffect(() => {
  //   void fetch("./data.json")
  //     .then((res) => res.json())
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  //     .then((data) => setData(data));
  // }, []);

  return (
    <div className="mx-20 mt-8">
      <h2 className="text-3xl text-center font-bold mb-6">All Books</h2>
      <div className="lg:flex items-center justify-center space-x-6 -mb-12">
        <p className="sm:text-center lg:mb-0 mb-4">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-72"
          />
        </p>
        <p className="mb-4 lg:mb-9">
        <label className="label">
    <span className="label-text">By Genre</span>
  </label>
  <select className="select select-bordered w-32">
            <option disabled selected>
              Dafault
            </option>
            <option>History</option>
            <option>Fantasy</option>
            <option>Cooking</option>
            <option>Science</option>
            <option>Psychology</option>
            <option>Mystery</option>
          </select>
        </p>
        <p className="mb-0 lg:mb-9">
        <label className="label">
    <span className="label-text">By Publication Year</span>
  </label>
          <select className="select select-bordered w-32">
            <option disabled selected>
            Dafault
            </option>
            <option>2014</option>
            <option>2015</option>
            <option>2016</option>
            <option>2017</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
          </select>
        </p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 my-20 gap-x-8 gap-y-8 ">
        {/* // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */}
        {allBooks?.data?.map((product:IProduct, i:number) => (
          <BookCard product={product} key={i}></BookCard>
        ))}
      </div>
    </div>
  );
}

export default AllBooks;
