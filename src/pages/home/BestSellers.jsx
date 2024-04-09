import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const bestSellers = products.filter((item) => item.status === "Best Selers");
  // console.log(bestSellers);

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div className="text-center">
        <h2 className="title">BestSellers</h2>
        <p className="text-Black/75 capitalize md:w-2/3 mx-auto mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
          molestie magna, ut viverra velit. Mauris eu est ut felis egestas
          ornare nec eget diam. Quisque in nunc et nulla suscipit luctus.
        </p>
      </div>
      <div className="mb-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {bestSellers.map((p) => (
            <SwiperSlide key={p.id}>
              <Link to={`/shop/${p.id}`}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="mx-auto w-full hover:scale-105 transition-all duration-300"
                />
              </Link>
              <div className="mt-4 px-4">
                <h4 className="text-base font-semibold mb-2">{p.title}</h4>
                <div className="flex justify-between">
                  <p className="text-black/50">{p.category}</p>
                  <p className="font-semibold">{p.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSellers;
