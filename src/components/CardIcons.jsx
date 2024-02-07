import { useRef, useState } from "react";
import useGlobalStore from "../state";
import { Frownin } from "test-icons-react/in";

const CardIcons = ({ props }) => {
  const getSelectedIcon = useGlobalStore((state) => state.setSelectedIcon);
  const { booleanValue, setBooleanValue } = useGlobalStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleIconsCount, setVisibleIconsCount] = useState(32);

  const [iconStates, setIconStates] = useState(
    Object.keys(props).reduce((acc, iconName) => {
      acc[iconName] = {
        isFocused: false,
        position: { x: 0, y: 0 },
        opacity: 0,
      };
      return acc;
    }, {})
  );

  const iconRefs = useRef({});

  const handleMouseMove = (e, iconName) => {
    if (!iconRefs.current[iconName] || iconStates[iconName].isFocused) return;

    const div = iconRefs.current[iconName];
    const rect = div.getBoundingClientRect();

    const position = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    setIconStates((prevStates) => ({
      ...prevStates,
      [iconName]: { ...prevStates[iconName], position },
    }));
  };

  const handleMouseEnter = (iconName) => {
    setIconStates((prevStates) => ({
      ...prevStates,
      [iconName]: { ...prevStates[iconName], opacity: 1 },
    }));
  };

  const handleMouseLeave = (iconName) => {
    setIconStates((prevStates) => ({
      ...prevStates,
      [iconName]: { ...prevStates[iconName], opacity: 0 },
    }));
  };

  const handleIconClick = (iconName) => {
    getSelectedIcon(props[iconName]);
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setBooleanValue(!booleanValue);
  };

  const filteredIcons = Object.keys(props).filter((iconName) =>
    iconName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleIcons = filteredIcons.slice(0, visibleIconsCount);

  const loadMoreIcons = () => {
    setVisibleIconsCount((prevCount) => prevCount + 31);
  };

  const handleInputClick = () => {
    const cardElement = document.getElementById("card");
    cardElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="card"
      className="w-full flex flex-wrap justify-center gap-8"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          handleCloseModal();
        }
      }}
    >
      <input
        type="text"
        placeholder="search icons..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onClick={handleInputClick}
        className="fixed z-20 top-4 right-3 border-1 block h-10 w-40 rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)]	bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#1b47c7)] focus:outline-none"
      />

      {visibleIcons.length === 0 ? (
        <div className="w-full h-[80vh] flex justify-center items-center">
          <div className="flex justify-center items-center gap-2">
            <h2 className="text-5xl">There is no results</h2>
            <Frownin className="text-5xl" />
          </div>
        </div>
      ) : (
        visibleIcons.map((iconName) => {
          const Icon = props[iconName];
          return (
            <div
              key={iconName}
              ref={(el) => (iconRefs.current[iconName] = el)}
              onClick={() => handleIconClick(iconName)} // Mover el evento de clic aquí
              onMouseMove={(e) => handleMouseMove(e, iconName)}
              onMouseEnter={() => handleMouseEnter(iconName)}
              onMouseLeave={() => handleMouseLeave(iconName)}
              className=" z-10 cursor-pointer relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-lg border hover:border-blue-900 border-zinc-900 bg-gradient-to-r from-black to-[#05011e] shadow-2xl"
              tabIndex={0}
            >
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                  opacity: iconStates[iconName].opacity,
                  background: `radial-gradient(150px circle at ${iconStates[iconName].position.x}px ${iconStates[iconName].position.y}px, rgba(35, 35, 236,0.3), transparent 40%)`,
                }}
              />
              <div className="z-10 flex flex-col justify-center items-center gap-3">
                <Icon className="text-white text-4xl" />
                <p className="text-xs text-slate-200">{iconName}</p>
              </div>
            </div>
          );
        })
      )}

      {visibleIcons.length < filteredIcons.length && (
        <div className="w-full h-20 flex justify-center items-center">
          <button
            onClick={loadMoreIcons}
            className="mt-4 bg-blue-500 hover:bg-white hover:text-black text-white rounded-lg px-10 py-1"
          >
            See more
          </button>
        </div>
      )}
    </div>
  );
};

export default CardIcons;
