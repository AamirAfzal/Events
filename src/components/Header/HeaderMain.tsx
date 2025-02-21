import { FaUser } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import styles from "./Header.module.css";


export default function HeaderMain() {
  return (
    <div className={`${styles.header} border-b border-gray-200 py-6 bg-slate-300`}>
      <div className="container sm:flex justify-between items-center align-middle ">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={100}
            height={100}
            className={`${styles.logo}  rounded-lg xs:mx-auto`}
          />
        </div>
        <Navbar />
        {/* Login Button */}
        <div className="xs:w-full flex justify-center sm:justify-end">
          <button className=" bg-blue-600 text-white px-6 py-2 rounded-xl mt-4 hover:bg-blue-700 flex items-center gap-2">
            <FaUser className="text-white text-base" /> {/* User Icon */}
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
