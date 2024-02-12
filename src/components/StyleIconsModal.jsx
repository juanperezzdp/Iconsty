import { useRef, useState } from "react";
import useIconStore from "../state";
import { useEffect } from "react";

const StyleIconsModal = () => {
  const iconRef = useRef(null);
  const icon = useIconStore((state) => state.selectedIcon);
  const { booleanValue, setBooleanValue } = useIconStore();
  const [color, setColor] = useState(null);
  const [background, setBackground] = useState(null);
  const [size, setSize] = useState(null);
  const [copied, setCopied] = useState(false);
  const [selectedAnimation, setSelectedAnimation] = useState("");
  const [animationDurationSelect, setAnimationDurationSelect] = useState("");
  const [animationIterationSelect, setAnimationIterationSelect] = useState("");

  const tailwindAnimationClasses = {
    "Select an animation": "",
    "blurred-fade-in": "animate-blurred-fade-in",
    "fade-in": "animate-fade-in",
    "fade-out": "animate-fade-out",
    "slide-in-top": "animate-slide-in-top",
    "slide-in-bottom": "animate-slide-in-bottom",
    "slide-out-top": "animate-slide-out-top",
    "rotate-90": "animate-rotate-90",
    "rotate-180": "animate-rotate-180",
    "rotate-360": "animate-rotate-360",
    "slide-out-bottom": "animate-slide-out-bottom",
    "zoom-in": "animate-zoom-in",
    "zoom-out": "animate-zoom-out",
    bouncing: "animate-bouncing",
    swing: "animate-swing",
    wobble: "animate-wobble",
    pulsar: "animate-pulsar",
    shake: "animate-shake",
    tada: "animate-tada",
    jump: "animate-jump",
    hang: "animate-hang",
    "fade-in-up": "animate-fade-in-up",
    "fade-in-down": "animate-fade-in-down",
    "fade-in-left": "animate-fade-in-left",
    "fade-in-right": "animate-fade-in-right",
    "fade-out-up": "animate-fade-out-up",
    "fade-out-down": "animate-fade-out-down",
    "fade-out-left": "animate-fade-out-left",
    "fade-out-right": "animate-fade-out-right",
    "bounce-fade-in": "animate-bounce-fade-in",
    "swing-drop-in": "animate-swing-drop-in",
    "roll-in": "animate-roll-in",
    "roll-out": "animate-roll-out",
  };

  const tailwindAnimationDurationClasses = {
    "Select an duration": "",
    none: "animate-duration-none",
    slower: "animate-duration-slower",
    slow: "animate-duration-slow",
    normal: "animate-duration-normal",
    fast: "animate-duration-fast",
    faster: "animate-duration-faster",
    "100ms": "animate-duration-100",
    "150ms": "animate-duration-150",
    "200ms": "animate-duration-200",
    "250ms": "animate-duration-250",
    "300ms": "animate-duration-300",
    "400ms": "animate-duration-400",
    "500ms": "animate-duration-500",
    "700ms": "animate-duration-700",
    "800ms": "animate-duration-800",
    "900ms": "animate-duration-900",
    "1000ms": "animate-duration-1000",
  };

  const tailwindAnimationIterationCountClasses = {
    "Select an iteration count": "",
    none: "animate-iteration-count-none",
    once: "animate-iteration-count-once",
    twice: "animate-iteration-count-twice",
    thrice: "animate-iteration-count-thrice",
    infinite: "animate-iteration-count-infinite",
  };

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }, [copied]);

  const handleCopyToClipboard = () => {
    const svgElement = iconRef.current.querySelector("svg");
    if (svgElement) {
      const svgString = new XMLSerializer().serializeToString(svgElement);

      navigator.clipboard.writeText(svgString).then(() => {
        setCopied(`SVG`);
      });
    }
  };

  const handleClose = () => {
    setBooleanValue(!booleanValue);
  };

  const handleImportCopy = () => {
    const importIcon = `import { ${icon.name} } from "iconty/${icon.name.slice(
      -2
    )}"`;

    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = importIcon;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    setCopied("Import");
  };

  const handleCopyComponent = () => {
    const component = `<${icon.name} ${
      size !== null ||
      background !== null ||
      color != null ||
      selectedAnimation != "" ||
      animationDurationSelect != "" ||
      animationIterationSelect != ""
        ? ` class="`
        : ""
    } 
    ${size === null ? "" : `w-[${size.trim()}px]`}
    ${background === null ? "" : `bg-[${background.trim()}]`}
    ${color === null ? "" : `text-[${color.trim()}]`}
    ${selectedAnimation != "" ? selectedAnimation : ""}
    ${animationDurationSelect != "" ? animationDurationSelect : ""}
    ${animationIterationSelect != "" ? animationIterationSelect : ""}
    ${
      size !== null ||
      background !== null ||
      color != null ||
      selectedAnimation != "" ||
      animationDurationSelect != "" ||
      animationIterationSelect != ""
        ? `"`
        : ""
    }/>`;

    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = component;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);

    setCopied("Component");
  };

  return (
    <div className="animate-modal-up backdrop-blur-sm  absolute  sm:fixed z-30 w-full sm:h-[100vh] flex sm:justify-center items-center">
      <div className="py-10 border-[1px] border-blue-700 bg-zinc-950 sm:rounded-xl w-full h-auto sm:w-[60rem] sm:h-[33rem] flex flex-col sm:flex-row sm:justify-center items-center relative">
        <div className="w-[36rem] flex flex-col justify-center items-center">
          <div className="absolute -top-1 right-2 sm:top-0 sm:right-4">
            <div
              onClick={() => handleClose()}
              className="text-red-800 text-3xl hover:text-red-600 cursor-pointer"
            >
              x
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-8 pb-8">
            <div className="flex justify-center items-center">
              <p className="text-sm">
                <span className="text-cyan-600">import</span>
                <span className="text-yellow-400">{` {`}</span>
                <span>{` ${icon.name} `}</span>
                <span className="text-yellow-400">{`} `}</span>
                <span className="text-cyan-600">from</span>
                <span className="text-lime-700">{` "iconty/${icon.name.slice(
                  -2
                )}";`}</span>
              </p>
              <button
                className={` w-20 hover:bg-white hover:border-white hover:text-black ml-2 bg-blue-700  text-xs py-1 px-4 rounded-md`}
                onClick={() => {
                  setCopied("Import"), handleImportCopy();
                }}
              >
                {copied === "Import" ? "Copied" : "Copy"}
              </button>
            </div>
            <div
              ref={iconRef}
              className="h-52 flex flex-col justify-center items-center"
            >
              <div
                className={`rounded-lg mb-4 ${selectedAnimation} ${animationDurationSelect} ${
                  animationIterationSelect === ""
                    ? "animate-iteration-count-thrice"
                    : animationIterationSelect
                } `}
                style={{
                  color: `${color}`,
                  fontSize: `${size === null ? 48 : size}px`,
                  backgroundColor: `${background}`,
                }}
              >
                {icon()}
              </div>

              <p className="text-3xl">{icon.name}</p>
            </div>

            <div className="flex justify-center items-center">
              <div
                className={`${
                  size !== null ||
                  background !== null ||
                  color != null ||
                  selectedAnimation != "" ||
                  animationDurationSelect != "" ||
                  animationIterationSelect != ""
                    ? "flex-col items-start"
                    : "items-center"
                } h-5 text-sm flex justify-center`}
              >
                <span className="text-cyan-600 text-xl">{`<`}</span>
                <span className="pl-4">{` ${icon.name}`}</span>
                <span className="text-violet-500 -pt-4  pl-4 ">{`
                
                ${
                  size !== null ||
                  background !== null ||
                  color != null ||
                  selectedAnimation != "" ||
                  animationDurationSelect != "" ||
                  animationIterationSelect != ""
                    ? ` class="`
                    : ""
                } 
                ${size === null ? "" : `w-[${size.trim()}px]`} 
                ${background === null ? "" : `bg-[${background.trim()}]`} 
                ${
                  selectedAnimation != "Select an animation"
                    ? selectedAnimation
                    : ""
                }
                ${
                  animationDurationSelect != "Select an duration"
                    ? animationDurationSelect
                    : ""
                }
                ${
                  animationIterationSelect != "Select an iteration count"
                    ? animationIterationSelect
                    : ""
                }
                ${color === null ? "" : `text-[${color.trim()}]`} ${
                  size !== null ||
                  background !== null ||
                  color != null ||
                  selectedAnimation != "" ||
                  animationDurationSelect != "" ||
                  animationIterationSelect != ""
                    ? `"`
                    : ""
                }`}</span>
                <span className="text-cyan-600 text-xl">{`/>`}</span>
              </div>
              <button
                onClick={() => {
                  setCopied("Component"), handleCopyComponent();
                }}
                className={`w-20  hover:bg-white hover:border-white hover:text-black ml-2 bg-blue-700  text-xs py-1 px-4 rounded-md`}
              >
                {copied === "Component" ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </div>

        <div className="w-[15rem]">
          <h4 className=" text-center text-2xl ">
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
            <select
              className="cursor-pointer w-full p-2 block py-2.5 px-0 text-sm text-gray-300 bg-transparent border-0 border-b-2 border-blue-900 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-500 "
              id="animationSelect"
              onChange={(e) =>
                setAnimationIterationSelect(
                  tailwindAnimationIterationCountClasses[e.target.value]
                )
              }
            >
              {Object.keys(tailwindAnimationIterationCountClasses).map(
                (animationKey) => (
                  <option
                    className="bg-black"
                    key={animationKey}
                    value={animationKey}
                  >
                    {animationKey}
                  </option>
                )
              )}
            </select>
            <select
              className="cursor-pointer w-full p-2 block py-2.5 px-0 text-sm text-gray-300 bg-transparent border-0 border-b-2 border-blue-900 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-500 "
              id="animationSelect"
              onChange={(e) =>
                setSelectedAnimation(tailwindAnimationClasses[e.target.value])
              }
            >
              {Object.keys(tailwindAnimationClasses).map((animationKey) => (
                <option
                  className="bg-black"
                  key={animationKey}
                  value={animationKey}
                >
                  {animationKey}
                </option>
              ))}
            </select>
            <select
              className="cursor-pointer w-full p-2 block py-2.5 px-0 text-sm text-gray-300 bg-transparent border-0 border-b-2 border-blue-900 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-500 "
              id="animationSelect"
              onChange={(e) =>
                setAnimationDurationSelect(
                  tailwindAnimationDurationClasses[e.target.value]
                )
              }
            >
              {Object.keys(tailwindAnimationDurationClasses).map(
                (animationKey) => (
                  <option
                    className="bg-black"
                    key={animationKey}
                    value={animationKey}
                  >
                    {animationKey}
                  </option>
                )
              )}
            </select>
          </form>
          <button
            className={`mt-8 hover:bg-white  hover:text-black w-full p-1 bg-blue-700 rounded-lg `}
            onClick={() => {
              setCopied("SVG"), handleCopyToClipboard();
            }}
          >
            {copied === "SVG" ? "Copied SVG" : "Copy SVG"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StyleIconsModal;
