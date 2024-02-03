import { useEffect } from "react";
import useGobalStore from "../state";

const Nav = () => {
  const { setNavValue } = useGobalStore();

  useEffect(() => {}, [setNavValue]);

  const handleButtonClick = (value) => {
    setNavValue(value);
  };

  return (
    <nav className=" w-full h-20 flex justify-center gap-8">
      <button
        onClick={() => handleButtonClick("brands")}
        className="relative inline-flex w-28 h-7 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1d4ed8_0%,#7a9cf9_50%,#1d4ed8_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3  text-sm font-medium text-white backdrop-blur-3xl">
          Brands
        </span>
      </button>
      <button
        onClick={() => handleButtonClick("ci")}
        className="relative inline-flex w-28 h-7 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1d4ed8_0%,#7a9cf9_50%,#1d4ed8_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3  text-sm font-medium text-white backdrop-blur-3xl">
          Ci
        </span>
      </button>
      <button className="relative inline-flex w-28 h-7 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1d4ed8_0%,#7a9cf9_50%,#1d4ed8_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3  text-sm font-medium text-white backdrop-blur-3xl">
          Click Me
        </span>
      </button>
      <button className="relative inline-flex w-28 h-7 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1d4ed8_0%,#7a9cf9_50%,#1d4ed8_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3  text-sm font-medium text-white backdrop-blur-3xl">
          Click Me
        </span>
      </button>
    </nav>
  );
};

export default Nav;
