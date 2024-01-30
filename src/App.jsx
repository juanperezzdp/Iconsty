import CardIcons from "./components/CardIcons";
import Heard from "./components/Heard";
import Nav from "./components/Nav";
import StyleIconsModal from "./components/StyleIconsModal";
import useIconStore from "./state";

function App() {
  const { booleanValue } = useIconStore();

  return (
    <>
      {booleanValue && <StyleIconsModal />}
      <Heard />
      <Nav />
      <CardIcons />
    </>
  );
}

export default App;
