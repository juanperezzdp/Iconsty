import CardIcons from "./components/CardIcons";
import Heard from "./components/Heard";
import Nav from "./components/Nav";
import StyleIconsModal from "./components/StyleIconsModal";
import useGobalStore from "./state";
import Br from "./Import/Br";
import In from "./Import/In";

function App() {
  const { navValue, booleanValue } = useGobalStore();

  return (
    <>
      {booleanValue && <StyleIconsModal />}
      <Heard />
      <Nav />
      {navValue === null && <CardIcons props={In} />}
      {navValue === "brands" && <CardIcons props={Br} />}
      {navValue === "interface" && <CardIcons props={In} />}
    </>
  );
}

export default App;
