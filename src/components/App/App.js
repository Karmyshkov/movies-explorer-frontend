import "./App.css";
import { Header } from "../Header";
import { Main } from "../Main";
import { Footer } from "../Footer";

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
