import { useRef, useState } from "react";
import useGobalStore from "../state";

const CardIcons = ({ props }) => {
  const getSelectedIcon = useGobalStore((state) => state.setSelectedIcon);
  const { booleanValue, setBooleanValue } = useGobalStore();

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

  const iconRefs = Object.keys(props).reduce((acc, iconName) => {
    acc[iconName] = useRef(null);
    return acc;
  }, {});

  const handleMouseMove = (e, iconName) => {
    if (!iconRefs[iconName].current || iconStates[iconName].isFocused) return;

    const div = iconRefs[iconName].current;
    const rect = div.getBoundingClientRect();

    const position = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    setIconStates((prevStates) => ({
      ...prevStates,
      [iconName]: { ...prevStates[iconName], position },
    }));
  };

  const handleFocus = (iconName) => {
    setIconStates((prevStates) => ({
      ...prevStates,
      [iconName]: { ...prevStates[iconName], isFocused: true, opacity: 1 },
    }));
  };

  const handleBlur = (iconName) => {
    setIconStates((prevStates) => ({
      ...prevStates,
      [iconName]: { ...prevStates[iconName], isFocused: false, opacity: 0 },
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
  };

  const handleCloseModal = () => {
    setBooleanValue(!booleanValue);
  };

  return (
    <div className="w-full flex flex-wrap justify-center gap-8">
      {Object.keys(props).map((iconName) => {
        const Icon = props[iconName];
        return (
          <div
            key={iconName}
            ref={iconRefs[iconName]}
            onClick={() => {
              handleIconClick(iconName);
              handleCloseModal();
            }}
            onMouseMove={(e) => handleMouseMove(e, iconName)}
            onFocus={() => handleFocus(iconName)}
            onBlur={() => handleBlur(iconName)}
            onMouseEnter={() => handleMouseEnter(iconName)}
            onMouseLeave={() => handleMouseLeave(iconName)}
            className=" cursor-pointer relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-lg border hover:border-blue-900  border-zinc-900  bg-gradient-to-r from-black to-[#05011e] shadow-2xl"
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: iconStates[iconName].opacity,
                background: `  radial-gradient(150px circle at ${iconStates[iconName].position.x}px ${iconStates[iconName].position.y}px, rgba(35, 35, 236,0.3), transparent 40%)`,
              }}
            />
            <div className=" z-10 flex flex-col justify-center items-center gap-3">
              <Icon className="text-white text-4xl" />
              <p className="text-xs text-slate-200">{iconName}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardIcons;
