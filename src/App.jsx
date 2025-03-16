import { useEffect, useState } from "react";
import { Footer } from "./components/Footer/index.jsx";
import { Header } from "./components/Header/index.jsx";
import { Home } from "./pages/Home/index.jsx";
import "./global.css";

export function App() {
  const [data, setData] = useState({});

  async function fetchApi() {
    try {
      const response = await fetch(
        "http://monkswendhelnogueiraapi.local/json/wp/v2/pages/60",
      );
      if (response.ok) {
        const json = await response.json();
        setData(json);
      }
    } catch (error) {
      throw Error("Deu um erro ao puxar os dados da api", error);
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  const dataObject = data?.landpage || {};
  return (
    <>
      <Header dataObject={dataObject} />
      <Home dataObject={dataObject} />
    </>
  );
}
