import Collections from "./Collections";
import Banner from "./Banner";
import Category from "./Category";
import Products from "./Products";
import BestSellers from "./BestSellers";
import Newsletters from "./Newsletters";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Products />
      <Collections />
      <BestSellers />
      <Newsletters />
    </div>
  );
};

export default Home;
