import { useEffect } from "react";
import useGobalStore from "../state";

const Nav = () => {
  const { setNavValue } = useGobalStore();

  const smoothScroll = (targetElement) => {
    const targetPosition = targetElement.offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        smoothScroll(targetElement);
      }
    };

    const links = document.querySelectorAll("nav a");
    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, [setNavValue]);

  const handleButtonClick = (value) => {
    setNavValue(value);
  };

  return (
    <nav className=" w-full h-20 flex justify-center gap-10 sm:gap-20">
      <a
        href="#card"
        onClick={() => handleButtonClick("interface")}
        className="relative inline-flex w-32 sm:w-56 h-10 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1d4ed8_0%,#ffff_50%,#1d4ed8_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3  text-lg font-medium text-white backdrop-blur-3xl">
          Interface
        </span>
      </a>
      <a
        href="#card"
        onClick={() => handleButtonClick("brands")}
        className="relative inline-flex w-32 sm:w-56 h-10 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1d4ed8_0%,#ffff_50%,#1d4ed8_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3  text-lg font-medium text-white backdrop-blur-3xl">
          Brands
        </span>
      </a>
    </nav>
  );
};

export default Nav;
