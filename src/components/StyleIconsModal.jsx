import { useRef, useState } from "react";
import { CiCircleRemove } from "test-icons-react/ci";
import useIconStore from "../state";

const StyleIconsModal = () => {
  const iconRef = useRef(null);
  const paragraphRefImport = useRef(null);
  const paragraphRefComponent = useRef(null);
  const icon = useIconStore((state) => state.selectedIcon);
  const { booleanValue, setBooleanValue } = useIconStore();
  const [color, setColor] = useState(null);
  const [background, setBackground] = useState(null);
  const [size, setSize] = useState(null);

  const handleCopyToClipboard = () => {
    const svgElement = iconRef.current.querySelector("svg");
    if (svgElement) {
      const svgString = new XMLSerializer().serializeToString(svgElement);

      navigator.clipboard.writeText(svgString).then(() => {
        alert(`Copy icon SVG`);
      });
    }
  };

  const handleClose = () => {
    setBooleanValue(!booleanValue);
  };

  const handleCopy = () => {
    const range = document.createRange();
    range.selectNode(paragraphRefImport.current);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    document.execCommand("copy");

    window.getSelection().removeAllRanges();

    alert("Copy import");
  };

  const handleCopyComponent = () => {
    const rangee = document.createRange();
    rangee.selectNode(paragraphRefComponent.current);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(rangee);

    document.execCommand("copy");

    window.getSelection().removeAllRanges();

    alert("Copy Component");
  };

  return (
    <div className="animate-modal-up backdrop-blur-sm fixed z-20 w-full h-[100vh] flex justify-center items-center">
      <div className=" border-[1px] border-blue-700 bg-zinc-950 rounded-xl w-[60rem] h-[30rem] flex justify-around items-center relative">
        <div className="w-[36rem] flex flex-col justify-center items-center">
          <div className="absolute top-4 right-4">
            <CiCircleRemove
              onClick={() => handleClose()}
              className="text-red-800 text-3xl hover:text-red-600 cursor-pointer"
            />
          </div>
          <div
            className="flex flex-col justify-center items-center gap-8"
            ref={iconRef}
          >
            <div className="flex justify-center items-center">
              <p className="text-sm" ref={paragraphRefImport}>
                <span className="text-cyan-600">import</span>
                <span className="text-yellow-400">{` {`}</span>
                <span>{` ${icon.name} `}</span>
                <span className="text-yellow-400">{`} `}</span>
                <span className="text-cyan-600">from</span>
                <span className="text-lime-700">{` "test-icons/ci";`}</span>
              </p>
              <button
                onClick={handleCopy}
                className="hover:bg-white hover:border-white hover:text-black ml-2 bg-blue-700  text-xs py-1 px-4 rounded-md"
              >
                Copy
              </button>
            </div>
            <div className="h-40 flex flex-col justify-center items-center">
              {icon && (
                <div
                  className="rounded-lg"
                  style={{
                    color: `${color}`,
                    fontSize: `${size === null ? 48 : size}px`,
                    backgroundColor: `${background}`,
                  }}
                >
                  {icon()}
                </div>
              )}
              <p className="text-3xl">{icon.name}</p>
            </div>

            <div className="flex">
              <p
                ref={paragraphRefComponent}
                className="text-sm flex justify-center items-center "
              >
                <span className="text-cyan-600 text-xl">{`<`}</span>
                <span>{` ${icon.name} `}</span>
                <span className="text-teal-400">{`${
                  size !== null || background !== null || color != null
                    ? ` className="`
                    : ""
                } ${size === null ? "" : `w-[${size.trim()}px]`} ${
                  background === null ? "" : `bg-[${background.trim()}]`
                } ${color === null ? "" : `text-[${color.trim()}]`} ${
                  size !== null || background !== null || color != null
                    ? `"`
                    : ""
                }`}</span>
                <span className="text-cyan-600 text-xl">{`/>`}</span>
              </p>
              <button
                onClick={handleCopyComponent}
                className="hover:bg-white hover:border-white hover:text-black ml-2 bg-blue-700  text-xs  px-4 rounded-md"
              >
                Copy
              </button>
            </div>
          </div>
        </div>

        <div className="w-[15rem]">
          <h4 className=" text-center text-2xl">
            These styles are with TailwindCss
          </h4>
          <form>
            <div>
              <label className="" htmlFor="sliderRanger">
                Size
              </label>
              <div className="flex gap-1">
                <input
                  className=" cursor-pointer w-full"
                  type="range"
                  name="sliderRanger"
                  id="sliderRanger"
                  min="24"
                  max="96"
                  step="8"
                  value={size}
                  onChange={(e) => {
                    setSize(e.target.value);
                  }}
                />
                <p>{`${size === null ? 48 : size}px`}</p>
              </div>
            </div>
            <div className="mt-2">
              <label className="" htmlFor="background">
                background
              </label>
              <div className=" mt-2 flex items-center gap-8">
                <input
                  className="style-input-color w-12 h-12  p-0 rounded-lg "
                  type="color"
                  name="background"
                  id="background"
                  value={background}
                  onChange={(e) => {
                    setBackground(e.target.value);
                  }}
                />
                <p className="text-white">
                  {background === null ? "#000000" : background}
                </p>
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="color">color</label>
              <div className=" mt-2 flex items-center gap-8">
                <input
                  className="style-input-color w-12 h-12  p-0 rounded-lg "
                  type="color"
                  name="color"
                  id="color"
                  value={color}
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                />
                <p className="text-white">
                  {color === null ? "#000000" : color}
                </p>
              </div>
            </div>
          </form>
          <button
            className="mt-4 hover:bg-white hover:border-white hover:text-black border-[1px] border-blue-700 w-full p-1 bg-blue-700 rounded-lg "
            onClick={handleCopyToClipboard}
          >
            Copy SVG
          </button>
        </div>
      </div>
    </div>
  );
};

export default StyleIconsModal;
