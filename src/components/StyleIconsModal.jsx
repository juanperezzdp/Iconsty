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
      size !== null || background !== null || color != null
        ? ` className="`
        : ""
    } ${size === null ? "" : `w-[${size.trim()}px]`} ${
      background === null ? "" : `bg-[${background.trim()}]`
    } ${color === null ? "" : `text-[${color.trim()}]`} ${
      size !== null || background !== null || color != null ? `"` : ""
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
    <div className="animate-modal-up backdrop-blur-sm fixed z-30 w-full h-[100vh] flex justify-center items-center">
      <div className=" border-[1px] border-blue-700 bg-zinc-950 rounded-xl w-[60rem] h-[30rem] flex justify-around items-center relative">
        <div className="w-[36rem] flex flex-col justify-center items-center">
          <div className="absolute top-4 right-4">
            <div
              onClick={() => handleClose()}
              className="text-red-800 text-3xl hover:text-red-600 cursor-pointer"
            >
              x
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-8">
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
                onClick={() => {
                  setCopied("Import"), handleImportCopy();
                }}
                className={` w-20 hover:bg-white hover:border-white hover:text-black ml-2 bg-blue-700  text-xs py-1 px-4 rounded-md`}
              >
                {copied === "Import" ? "Copied" : "Copy"}
              </button>
            </div>
            <div
              ref={iconRef}
              className="h-40 flex flex-col justify-center items-center"
            >
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

            <div className="flex justify-center items-center">
              <p className="text-sm flex justify-center items-center ">
                <span className="text-cyan-600 text-xl">{`<`}</span>
                <span>{` ${icon.name}`}</span>
                <span className="text-violet-500">{`${
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
