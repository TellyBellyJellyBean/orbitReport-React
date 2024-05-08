import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner"
import { useState } from "react";
import satData from "./components/satData";

function App() {
  const [sat, setData] = useState(satData);
  const orbitType = [...new Set(satData.map((data) => data.orbitType))]
  return (
    <div>
      <Banner />
      <Buttons />
      <Table />
    </div>
  );
}

export default App;