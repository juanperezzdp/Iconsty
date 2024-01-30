const Heard = () => {
  return (
    <section className="w-full h-[80vh] ">
      <div className="text-pretty p-1 sm:p-0 animate-slide-up w-full h-full flex flex-col justify-center items-center text-center">
        <h1 className=" text-4xl sm:text-[4rem] font-semibold ">
          Welcome to the library IconsTy
        </h1>
        <p className="mt-4 w-[15rem] sm:w-full text-xs sm:text-xl text-zinc-500 ">
          You will find a collection of open-source icons that you can install
          in your web project.
        </p>

        <div className=" mt-12 flex justify-center items-center gap-2 sm:gap-12">
          <button className="hover:bg-white hover:border-white hover:text-black border-[1px] border-blue-700 w-40 p-2 bg-blue-700 rounded-lg ">
            Installation guide
          </button>
          <button className="hover:border-blue-700 hover:bg-[linear-gradient(110deg,#1d4ed8,45%,#1e293b,55%,#1d4ed8)] border-[1px] border-zinc-400  rounded-lg p-2 w-40 cursor-pointer animate-background-shine bg-[linear-gradient(110deg,#ffff,45%,#1e293b,55%,#ffff)] bg-[length:250%_100%] bg-clip-text text-transparent tra">
            Code NPM
          </button>
        </div>
      </div>
    </section>
  );
};

export default Heard;
