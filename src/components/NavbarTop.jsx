import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";

const NavbarTop = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(true);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setNav(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-[#C1E8FF] h-14 px-8 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Link to="/" className="text-2xl font-bold text-[#060606]">
          MrBri<span className="text-[#1057E0]">Cool</span>
        </Link>
        <Link
          to="/become-handyman"
          className="mx-5 text-blue-900 hidden md:block font-bold hover:underline md:text-xs lg:text-base"
        >
          Devenir MrBriCool
        </Link>
      </div>
      <Link
        to="/find-handyman"
        className="hidden md:block md:w-[13rem] bg-[#1057E0] hover:bg-blue-800 outline-none rounded-3xl text-xs px-5 py-2.5 text-center"
      >
        <button className="text-white font-bold">Trouver un Bricoleur</button>
      </Link>
      <div className="flex px-3">
        <div className="hidden md:flex ">
          <Link
            to="/login"
            className="bg-white hover:bg-gray-100 outline-none rounded-3xl md:w-[8rem] text-xs px-5 py-2.5 text-center"
          >
            <button className="text-black font-bold">S'inscrire</button>
          </Link>
          <Link
            to="/signup"
            className="bg-white hover:bg-gray-100 outline-none rounded-3xl md:w-[8rem] text-xs px-5 py-2.5 text-center ml-1.5"
          >
            <button className="text-black font-bold">Se Connecter</button>
          </Link>
        </div>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#fff] ease-in-out duration-500 z-10"
              : "fixed left-[-100%]"
          }
        >
          <Link
            to="/"
            className="text-3xl font-bold text-black m-4"
            onClick={closeNav}
          >
            MrBri<span className="text-[#1057E0]">Cool</span>
          </Link>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-400">
              <Link to="/" className="hover:text-gray-500" onClick={closeNav}>
                Devenir un bricoleur
              </Link>
            </li>
            <li className="p-4 border-b border-gray-400">
              <Link to="/" className="hover:text-gray-500" onClick={closeNav}>
                Trouver un Bricoleur
              </Link>
            </li>
            <li className="p-4 border-b border-gray-400">
              <Link to="/" className="hover:text-gray-500" onClick={closeNav}>
                S'inscrire
              </Link>
            </li>
            <li className="p-4">
              <Link to="/" className="hover:text-gray-500" onClick={closeNav}>
                Se Connecter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTop;
