import { useRef, useState } from "react";
import Ai from "../Import/Ai";

const CardIcons = () => {
  const iconRefs = Object.keys(Ai).reduce((acc, iconName) => {
    acc[iconName] = useRef(null);
    return acc;
  }, {});

  const [iconStates, setIconStates] = useState(
    Object.keys(Ai).reduce((acc, iconName) => {
      acc[iconName] = {
        isFocused: false,
        position: { x: 0, y: 0 },
        opacity: 0,
      };
      return acc;
    }, {})
  );

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
    const svgElement = iconRefs[iconName].current.querySelector("svg");

    if (svgElement) {
      const svgString = new XMLSerializer().serializeToString(svgElement);

      // Copiar el string SVG al portapapeles
      navigator.clipboard.writeText(svgString).then(() => {
        // Aquí puedes agregar lógica adicional después de copiar
        alert(`Icono ${iconName} copiado al portapapeles.`);
      });
    }
  };

  return (
    <div className="w-full flex flex-wrap gap-4">
      {Object.keys(Ai).map((iconName) => {
        const Icon = Ai[iconName];
        return (
          <div
            key={iconName}
            ref={iconRefs[iconName]}
            onClick={() => handleIconClick(iconName)}
            onMouseMove={(e) => handleMouseMove(e, iconName)}
            onFocus={() => handleFocus(iconName)}
            onBlur={() => handleBlur(iconName)}
            onMouseEnter={() => handleMouseEnter(iconName)}
            onMouseLeave={() => handleMouseLeave(iconName)}
            className=" cursor-pointer relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-xl border-2 hover:border-blue-950  border-slate-800  bg-gradient-to-r from-black to-[#05011e] shadow-2xl"
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: iconStates[iconName].opacity,
                background: `  radial-gradient(150px circle at ${iconStates[iconName].position.x}px ${iconStates[iconName].position.y}px, rgba(35, 35, 236,0.3), transparent 40%)`,
              }}
            />
            <div className=" z-10 flex flex-col justify-center items-center gap-3">
              <Icon className="text-white text-4xl animate-bounce animate-infinite" />
              <p className="text-xs text-slate-200">{iconName}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardIcons;
