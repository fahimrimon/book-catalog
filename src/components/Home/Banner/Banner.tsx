import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {

  return (
    <div className="hero bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse text-black flex">
        <div className="flex-auto w-1/2">
          <img
            className="rounded"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
            style={{ width: "100%" }}
            src="https://img.freepik.com/premium-vector/man-with-laptop-education-working-concept_113065-223.jpg?w=2000"
            alt=""
          />
        </div>
        <div className="flex-auto lg:w-1/2 px-5 text-start ">
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            className= "lg:text-5xl text-2xl font-bold text-black"
          >
            Hand Picked
          </h1>
          <h1
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="300"
            className="lg:text-5xl text-2xl text-black"
          >
            Book to your door.
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="text-gray-600 py-6"
          >
            Reading is the best for get idea. Writing to improve your imagination. We deliver books all over the world 10,000+ books in stock.
          </p>
          <Link
            to="/"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="btn btn-primary button-orange"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;