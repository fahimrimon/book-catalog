/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import BookCard from "../components/BookCard";
import { useGetLatestBooksQuery } from "../redux/features/book/bookApi";
import { IProduct } from "../types/GlobalTypes";

export default function RecentBooks() {

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { data, isLoading, isError, isSuccess } = useGetLatestBooksQuery(null);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <>
      {isSuccess ? (
              <div className="mx-20 mt-8">
            <div>
              <h2 className="mt-4 text-center text-3xl font-bold font-mono">
                Recently added books <br className="sm:block" hidden />
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 my-20 gap-x-8 gap-y-8">
              {data?.data?.map((book: IProduct) => (
                <div key={book._id} className="card-wrapper">
                  <BookCard product={book} />
                </div>
              ))}
            </div>
          </div>
  ) : null}
    </>
  )
}

