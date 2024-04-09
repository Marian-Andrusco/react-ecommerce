import { FaShoppingBag } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-primaryBg py-12 xl:px-28 px-4">
      <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14">
        <div className="md:w-1/2">
          <img
            src="/images/women-white-bg.jpg"
            alt=""
            className="rounded-tl-[120px] rounded-br-[120px] h-[500px]"
          />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-5xl font-light mb-5">Collections</h1>
          <p className="text-xl mb-7">
            You can explode many different collection from various brands in our
            shop.
          </p>
          <button className="bg-Black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2">
            <FaShoppingBag className="inline-flex" />
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
