/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useForm } from "react-hook-form";
import { createUser } from "../redux/features/user/userSlice";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import './SignUp.css'

const SignUp = () => {

  interface SignUpData {
    email: string,
    password: string
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {
    register,
    handleSubmit,
    formState: { errors },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  } = useForm<SignUpData>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmit = (data: SignUpData) => {
    // Handle form submission here
    void dispatch(createUser({ email: data.email, password: data.password }));
    toast.success("User created successfully");
    navigate("/");
  };

  return (
    <div>
      <div className="m-auto xl:container px-12 sm:px-0 mx-auto">
        <div className="mx-auto h-full sm:w-max">
          <div className="m-auto  py-12">
            <div className="mt-8 rounded-3xl border light:bg-gray-50 -mx-6 sm:-mx-10 p-8 sm:p-10">
              <h3 className="text-2xl font-semibold text-center">SignUp</h3>
              <form
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
                onSubmit={handleSubmit(onSubmit)}
                className="mt-10 space-y-8 "
              >
                <div>
                  <div
                    className={`relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300 ${
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                      errors.email ? "before:bg-red-400" : ""
                    }`}
                  >
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email or user name"
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                      {...register("email", { required: "Email is required" })}
                      className={`w-full bg-transparent pb-3 border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none ${
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                        errors.email ? "invalid:border-red-400" : ""
                      } transition`}
                    />
                  </div>
                  {errors.email && (
                    <span className="text-red-400">
                      {/* {errors.email.message} */}
                    </span>
                  )}
                </div>

                <div className="flex flex-col items-end">
                  <div
                    className={`w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300 ${
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                      errors.password ? "before:bg-red-400" : ""
                    }`}
                  >
                    <input
                      type="password"
                      id="password"
                      placeholder="Your password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                      className={`w-full bg-transparent pb-3 border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none ${
                        errors.password ? "invalid:border-red-400" : ""
                      } transition`}
                    />
                  </div>
                  {errors.password && (
                    <span className="text-red-400">
                      {/* {errors.password.message} */}
                    </span>
                  )}
                  <button type="reset" className="-mr-3 w-max pt-3 pr-3">
                    <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                      Forgot password ?
                    </span>
                  </button>
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn btn-primary mx-auto button-orange"
                  >
                    <span className="text-base font-semibold text-white">
                      SignUp
                    </span>
                  </button>
                  <ToastContainer />
                  <button type="reset" className="p-3 flex justify-center mx-auto mt-2">
                    <span className="text-sm tracking-wide">
                      Already have an account?
                      <Link to='/login'><span className="text-orange-500 ml-2 font-semibold">Login</span></Link>
                    </span>
                  </button>
                </div>

                <div>
                <div className="divider">OR</div>
                <div className="mt-8 flex flex-wrap sm:grid gap-6 grid-cols-2">
                <button className="w-full h-11 rounded-full border border-gray-300/75  px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700">
                  <div className="w-max mx-auto flex items-center justify-center space-x-4">
                    <img src="https://freesvg.org/img/1534129544.png" className="w-5" alt="" />
                    <span className="block w-max text-sm font-semibold tracking-wide text-orange-400">
                      With Google
                    </span>
                  </div>
                </button>
                <button className="w-full h-11 rounded-full border border-gray-300/75 px-6 transition focus:bg-gray-700 active:bg-gray-600">
                  <div className="w-max mx-auto flex items-center justify-center space-x-4">
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png" className="w-5" alt="" />
                    <span className="block w-max text-sm font-semibold tracking-wide text-teal-700">
                      With Github
                    </span>
                  </div>
                </button>
              </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
