import { useEffect, useState } from "react";
import { Footer } from "./components/Footer/index.jsx";
import { Header } from "./components/Header/index.jsx";
import { Home } from "./pages/Home/index.jsx";
import "./global.css";

export function App() {
  const [data, setData] = useState({});
  const [products, setProducts] = useState([]);

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

  async function fetchCards() {
    try {
      const response = await fetch(
        "http://monkswendhelnogueiraapi.local/json/wp/v2/products",
      );

      if (response.ok) {
        const json = await response.json();
        return setProducts(json);
      }
    } catch (error) {
      throw new Error("Erro na requisição dos cards na api", error);
    }
  }

  useEffect(() => {
    fetchApi();
    fetchCards();
  }, []);

  const dataObject = data?.landpage || {};

  return (
    <>
      <Header dataObject={dataObject} />
      <Home dataObject={dataObject} products={products} />
      <Footer dataObject={dataObject} />
    </>
  );
}
