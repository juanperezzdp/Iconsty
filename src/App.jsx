import CardIcons from "./components/CardIcons";
import Heard from "./components/Heard";
import StyleIconsModal from "./components/StyleIconsModal";
import useIconStore from "./state";

function App() {
  const isModalOpen = useIconStore((state) => state.isModalOpen);

  return (
    <>
      {isModalOpen === true ? <StyleIconsModal /> : null}
      <Heard />
      <CardIcons />
    </>
  );
}

export default App;
