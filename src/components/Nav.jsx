import { Link } from "react-router-dom";
import logo from "../assets/video.gif";

const Nav = () => {
  return (
    <nav className="mainNav bg-transparent my-2">
      <div className="logoCont">
        <Link to={"/"}>
          <img src={logo} alt="logo" width={150} height={150} />
        </Link>
      </div>
      <div className="linksCont flex justify-end items-center gap-8 mx-2 max-sm:w-full">
        <Link to={"/aboutus"} className="linkInNav">
          About us
        </Link>
        <Link to={"/termsconditions"} className="linkInNav">
          Terms & Conditions
        </Link>
        <a
          href="https://wa.me/+201100435756"
          className="px-4 py-2 rounded-md text-white bg-black"
          target="_blank"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Nav;
