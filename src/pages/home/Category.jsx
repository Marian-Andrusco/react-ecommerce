import {
  FaCannabis,
  FaAccusoft,
  FaAmilia,
  FaApple,
  FaAtom,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28">
      <div className="flex items-center' justify-around flex-wrap gap-4 py-5">
        <FaCannabis className="w-24 h-24 text-Black" />
        <FaAccusoft className="w-24 h-24 text-Black" />
        <FaAmilia className="w-24 h-24 text-Black" />
        <FaApple className="w-24 h-24 text-Black" />
        <FaAtom className="w-24 h-24 text-Black" />
      </div>

      <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
        <p className="font-semibold uppercase md:-rotate-90 text-center bg-Black text-white md:p-1.5 p2 rounded-sm inline-flex">
          Explore new and popular styles
        </p>
        <div>
          <Link to="/">
            <img
              src="/images/female-models/alexandru-zdrobau-BGz8vO3pK8k-unsplash.jpg"
              alt=""
              className="w-[510px] hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-2">
            <Link to="/">
              <img
                src="/images/female-models/atikh-bana-2c0midsQKe0-unsplash.jpg"
                alt=""
                className=" hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src="/images/female-models/ayo-ogunseinde-RrD8ypt8cjY-unsplash.jpg"
                alt=""
                className=" hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src="/images/female-models/caique-nascimento-Ij24Uq1sMwM-unsplash.jpg"
                alt=""
                className=" hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src="/images/female-models/tamara-bellis-baKsNGGKZ3w-unsplash.jpg"
                alt=""
                className=" hover:scale-105 transition-all duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
