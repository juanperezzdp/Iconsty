import {
  Linkedinbr,
  Githubbr,
  Youtubebr,
  Wordpressbr,
  Figmanbr,
  Slackbr,
  Applebr,
  Googlebr,
  Stripebr,
  Algoliabr,
  Shopifybr,
  Kicktarterbr,
} from "test-icons-react/br";

import { AlarmAddin, BarcodeReaderin, Brainin } from "test-icons-react/in";
import Logo from "/LogoIconsty.png";

const Heard = () => {
  return (
    <section className="w-full h-[80vh] ">
      <div className="absolute w-32 mt-6 ml-4">
        <img src={Logo} alt="logo" />
      </div>
      <div className="rain-container">
        <div className="rain rain1">
          <AlarmAddin className="text-5xl text-cyan-300" />
        </div>
        <div className="rain rain2">
          <Githubbr className="text-5xl text-violet-900" />
        </div>
        <div className="drop drop2">
          <Linkedinbr className="text-5xl text-cyan-600" />
        </div>
        <div className="rain rain3">
          <BarcodeReaderin className="text-5xl text-blue-700" />
        </div>
        <div className="rain rain4">
          <Youtubebr className="text-5xl text-red-700" />
        </div>
        <div className="rain rain5">
          <Wordpressbr className="text-5xl text-blue-300" />
          <div className="drop drop5">
            <Kicktarterbr className="text-5xl text-pink-500" />
          </div>
        </div>
        <div className="rain rain6">
          <Figmanbr className="text-5xl text-emerald-600" />
        </div>
        <div className="rain rain7">
          <Slackbr className="text-5xl text-yellow-400" />
        </div>
        <div className="rain rain8">
          <Applebr className="text-5xl" />
        </div>
        <div className="drop drop8">
          <Brainin className="text-5xl text-pink-400" />
        </div>
        <div className="rain rain9">
          <Googlebr className="text-5xl text-red-600" />
        </div>
        <div className="rain rain10">
          <Stripebr className="text-5xl text-violet-600" />
        </div>
        <div className="drop drop11">
          <Shopifybr className="text-5xl text-green-500" />
        </div>
        <div className="drop drop12">
          <Algoliabr className="text-5xl text-red-500" />
        </div>
      </div>

      <div className=" absolute text-pretty p-1 sm:p-0 animate-slide-up w-full h-full flex flex-col justify-center items-center text-center">
        <h1 className=" text-5xl sm:text-[4rem] font-semibold ">
          Welcome to the library IconsTy
        </h1>
        <p className="text-base w-64 sm:w-full sm:text-xl  rounded-lg p-2 ">
          You will find a collection of open-source icons that you can install
          in your web project.
        </p>

        <div className=" mt-4 flex justify-center items-center gap-2 sm:gap-12">
          <button className="hover:bg-white hover:border-white hover:text-black border-[1px] border-blue-700 w-40 p-2 bg-blue-700 rounded-lg ">
            Installation guide
          </button>
          <button className="hover:border-blue-700 hover:text-blue-700 border-[1px] border-zinc-400  rounded-lg p-2 w-40 cursor-pointer">
            Code NPM
          </button>
        </div>
      </div>
    </section>
  );
};

export default Heard;
