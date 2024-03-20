import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="max-w-screen-2xl xl:px-28 px-4">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <FaSearch />
        <a href="/" className="flex items-center gap-2 text-lg">
          <img src="/images/logo.png" alt="" className="h-7" />
          Logo
        </a>

        <div className="text-lg text-Black sm:flex items-center gap-4 hidden">
          <a href="/" className="flex items-center gap-2">
            <FaUser /> Account
          </a>
          <a href="/" className="flex items-center gap-2">
            <FaShoppingBag /> Shopping
          </a>
        </div>
      </nav>
      <hr />
    </header>
  );
};

export default Navbar;
