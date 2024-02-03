import CardIcons from "./components/CardIcons";
import Heard from "./components/Heard";
import Nav from "./components/Nav";
import StyleIconsModal from "./components/StyleIconsModal";
import useGobalStore from "./state";
import Br from "./Import/Br";
import Ai from "./Import/Ai";

function App() {
  const { navValue, booleanValue } = useGobalStore();

  console.log(navValue);

  return (
    <>
      {booleanValue && <StyleIconsModal />}
      <Heard />
      <Nav />
      {navValue === null && <CardIcons props={Br} />}
      {navValue === "brands" && <CardIcons props={Br} />}
      {navValue === "ci" && <CardIcons props={Ai} />}
    </>
  );
}

export default App;
