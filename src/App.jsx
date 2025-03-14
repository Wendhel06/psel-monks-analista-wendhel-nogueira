import { Footer } from "./components/Footer/index.jsx";
import {Formulario} from "./components/Form/index.jsx";
import { Header } from "./components/Header/index.jsx";
import { GlobalStyle } from "./styles/global";

export function App() {
   
  return (
    <div className="container">
      <GlobalStyle />
      <Header/>
      <Formulario />
      <Footer />
    </div>
  )
}
