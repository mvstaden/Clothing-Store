import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-clothy-blue text-white">
      <div className="container mx-auto flex justify-between items-center py-3">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className=" hover:text-gray-300">
            <TbBrandMeta className="size-5" />
          </a>
          <a href="#" className=" hover:text-gray-300">
            <IoLogoInstagram className="size-5" />
          </a>
          <a href="#" className=" hover:text-gray-300">
            <RiTwitterXLine className="size-5" />
          </a>
        </div>
        <div className="text-sm text-center flex-grow ">
          <span>We shop worldwide - Fast and reliable shipping</span>
        </div>

        <div className="text-sm hidden md:block">
          <a href="tel:+123456789" className="hover:text-gray-300">
            +1 (234) 56789
          </a>
        </div>
      </div>
    </div>
  );
};
export default Topbar;
