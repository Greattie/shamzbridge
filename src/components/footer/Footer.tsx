import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="bg-slate-500 text-white mt-10">
      <div className="flex justify-between items-center w-[95%] mx-auto pt-5">
        <ul className="p-5 flex flex-col gap-4 text-lg font-semibold items-center">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#"> About Us</a>
          </li>
          <li>
            <a href="#"> Services</a>
          </li>
        </ul>

        <div className="p-5 flex flex-col gap-4 text-lg font-semibold items-center">
          <div className="flex items-center gap-4">
            <IoLocationOutline />
            <p>Cupiditate, qui</p>
          </div>

          <div className="flex items-center gap-4">
            <LuPhone />
            <a href="#">+91-1225-000</a>
          </div>

          <div className="flex items-center gap-4">
            <MdOutlineMail />
            <a href="#">shamzbridge@gmail.com</a>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      <p className="text-center font-semibold text-xl p-5">
        © 2024 shamzbridge.
      </p>
    </footer>
  );
};
