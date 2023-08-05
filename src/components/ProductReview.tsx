/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ChangeEvent, FormEvent, useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { useGetCommentQuery, usePostCommentMutation } from '../redux/features/book/bookApi';

interface IProps {
  id: string;
}

export default function ProductReview({ id }: IProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const { data } = useGetCommentQuery(id, {refetchOnMountOrArgChange: true, pollingInterval: 30000} );
  const [postComment, { isLoading, isError, isSuccess }] =
    usePostCommentMutation();
  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  console.log(inputValue);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const options = {
      id: id,
      data: { comment: inputValue },
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    postComment(options);
    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <form className="flex gap-5 items-center justify-center" onSubmit={handleSubmit}>
        <textarea
          className="lg:min-w-[500px] w-[200px] textarea textarea-warning"
          onChange={handleChange}
          value={inputValue}
        />
        <button
          type="submit"
          className="rounded-full h-10 w-10 p-2 text-[25px]"
        >
          <FiSend />
        </button>
      </form>
      <div className="mt-10">
        <h2 className='text-xl font-semibold'>Reviews</h2>
        {data?.comments?.map((review: string) => (
          <div>
          <p className="border border-gray-100 my-3"></p>
          <div className="flex items-center gap-5">
            <div>
              <div className="avatar">
                <div className="w-16 rounded-full shadow-lg shadow-gray-400 ring-offset-2">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-medium mb-1.5">John Doe</h2>
              <p className="text-gray-700 text-base">{review}</p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
