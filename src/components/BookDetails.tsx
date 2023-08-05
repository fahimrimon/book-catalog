/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  MdOutlineModeEditOutline,
} from "react-icons/md";
// import DeleteBookModal from "../components/DeleteBookModal";
// import { handleDeleteBookModal } from "../redux/features/book/bookSlice";
import { useGetSingleBookQuery } from "../redux/features/book/bookApi";
import { useAppSelector } from "../redux/hooks";
import ProductReview from "./ProductReview";
const defaultImage =
  "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=2000";

const defaultSummary =
  "The largest collection of book summaries, analyses, study guides, books, educational resources for students and teachers. Here, you'll find works from more than 250 greatest authors of all time. The Masque of the Red Death is a short story by the American writer Edgar Allan Poe. It is a story about Prince Prospero's attempts to avoid a deadly plague called the Red Death, by hiding in his abbey with his 1000 closest friends.";

export default function BookDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  const { id } = useParams();
  const { data: book, isLoading, isError } = useGetSingleBookQuery(id);
  const { _id, title, author, genre, publicationYear, creator, image, summary } =
    book?.data || {};

  let content = null;

  if (isLoading) {
    content = <p>Loading</p>;
  }
  if (!isLoading && isError) {
    content = <p>There was and error</p>
  }
  if (!isLoading && !isError && _id) {
    content = (
      <div>
        <div className="lg:flex justify-center lg:gap-10  mx-12">
          <div className="w-1/2 hidden lg:flex justify-center">
            <img
              className="w-[50%] h-[80%]"
              src={image ? image : defaultImage}
              alt=""
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl max-w-md text-slate-700 font-medium mt-5">
              {title}
            </h2>
            <p className="mt-2 text-xl font-semibold">
              Author:{" "}
              <span className="text-teal-600 cursor-pointer">{author}</span>
            </p>
            <p className="mt-5 text-lg">
              <span className="">Genre:</span>{" "}
              <span className="text-violet-600 capitalize cursor-pointer">
                {genre}
              </span>
            </p>
            <p className="mt-1 text-lg">
              <span className="">Publication Year:</span>{" "}
              <span className="font-medium">{publicationYear}</span>
            </p>

            <p className="mt-5">
              <span className="font-medium">Summary: </span>{" "}
              {summary ? summary : defaultSummary}
            </p>
          </div>
        </div>
        <ProductReview id={id!} />
      </div>
    );
  }

  return (
    <div className="container mx-auto ">
      <div className="text-right py-5">
        {user && user.email === creator && (
          <>
            <button
              onClick={() => navigate(`/edit-book/${_id}`)}
              className="bg-blue-100 p-1.5 hover:text-white hover:bg-blue-500 rounded-md transition-all duration-150 mx-2"
            >
              <MdOutlineModeEditOutline size={22} />
            </button>
            {/* <button
              onClick={() =>
                dispatch(handleDeleteBookModal({ isOpen: true, _id: _id }))
              }
              className="bg-red-100 p-1.5 hover:text-white hover:bg-red-500 rounded-md transition-all duration-150 mx-2"
            >
              <MdOutlineDeleteOutline size={22} />
            </button>{" "} */}
          </>
        )}
      </div>

      <div>{content}</div>

      {/* <DeleteBookModal /> */}
    </div>
  );
}