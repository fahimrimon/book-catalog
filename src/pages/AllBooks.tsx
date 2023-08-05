/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ChangeEvent, useState } from "react";
import { IProduct } from "../types/GlobalTypes";
import BookCard from "../components/BookCard";
import { useGetBooksQuery } from "../redux/features/book/bookApi";
import { ToastContainer, toast } from "react-toastify";

function AllBooks() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

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

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchQueryValue = e.target.value.toLowerCase();
    setSearchQuery(searchQueryValue);
  };

  const handleYear = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedYearValue = e.target.value;
    setSelectedYear(selectedYearValue);
  };

  const handleGenre = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedGenreValue = e.target.value;
    setSelectedGenre(selectedGenreValue);
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const filteredBooks = allBooks?.data.filter((book: IProduct) => {
    const isMatchingSearch =
      book.name.toLowerCase().includes(searchQuery) ||
      book.author.toLowerCase().includes(searchQuery) ||
      book.genre.toLowerCase().includes(searchQuery);
    const isMatchingYear =
      selectedYear === "" || book.publicationYear.toString() === selectedYear;
    const isMatchingGenre =
      selectedGenre === "" || book.genre === selectedGenre;
    return isMatchingSearch && isMatchingYear && isMatchingGenre;
  });

  const genreOptions: string[] = Array.from(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    new Set(allBooks?.data.map((book: IProduct) => book.genre))
  );

  const yearOptions: number[] = Array.from(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    new Set(allBooks?.data.map((book: IProduct) => book.publicationYear))
  );

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (isError) {
    toast.error("Something went wrong");
  }

  return (
    <>
      {isSuccess && (
        <div className="mx-20 mt-8">
          <h2 className="text-3xl text-center font-bold mb-6 font-mono">All Books</h2>
          <div className="lg:flex items-center justify-center space-x-6 -mb-12">
            <p className="sm:text-center lg:mb-0 mb-4">
              <input
                type="text"
                placeholder="Search your favourite book"
                value={searchQuery}
                onChange={handleSearch}
                className="input input-bordered w-72"
              />
            </p>
            <p className="mb-4 lg:mb-9">
              <label className="label">
                <span className="label-text">By Genre</span>
              </label>
              <select
                value={selectedGenre}
                onChange={handleGenre}
                className="select select-bordered w-32"
              >
                <option value="">Dafault</option>
                {genreOptions.map((genre: string) => (
                  <option value={genre} key={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </p>
            <p className="mb-0 lg:mb-9">
              <label className="label">
                <span className="label-text">By Publication Year</span>
              </label>
              <select
                value={selectedYear}
                onChange={handleYear}
                className="select select-bordered w-32"
              >
                <option value="">Dafault</option>
                {yearOptions.map((year: number) => (
                  <option value={year} key={year}>
                    {year}
                  </option>
                ))}
              </select>
            </p>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 my-20 gap-x-8 gap-y-8 ">
            {/* // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */}
            {filteredBooks?.map((product: IProduct, i: number) => (
              <BookCard product={product} key={i}></BookCard>
            ))}
            <ToastContainer />
          </div>
        </div>
      )}
    </>
  );
}

export default AllBooks;
