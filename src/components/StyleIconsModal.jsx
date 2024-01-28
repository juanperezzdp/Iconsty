import { useRef } from "react";
import { CiCircleRemove } from "test-icons-react/ci";

const StyleIconsModal = ({ icon, onClose }) => {
  const iconRef = useRef(null);

  const handleCopyToClipboard = () => {
    const svgElement = iconRef.current.querySelector("svg");
    if (svgElement) {
      const svgString = new XMLSerializer().serializeToString(svgElement);

      navigator.clipboard.writeText(svgString).then(() => {
        alert(`Icono copiado al portapapeles.`);
      });
    }
  };

  return (
    <div className="animate-modal-up backdrop-blur-sm absolute z-20 w-full flex justify-center items-center">
      <div className="border-[1px] border-blue-700 bg-zinc-950 rounded-xl w-[60rem] h-[30rem] flex flex-col justify-center items-center relative">
        <div className="absolute top-4 right-4">
          <CiCircleRemove
            onClick={onClose}
            className="text-red-800 text-3xl hover:text-red-600 cursor-pointer"
          />
        </div>
        <div className="text-7xl" ref={iconRef}>
          {icon && <div>{icon}</div>}
        </div>
        <button onClick={handleCopyToClipboard}>Copiar al portapapeles</button>
      </div>
    </div>
  );
};

export default StyleIconsModal;
