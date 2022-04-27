import "./App.css";
import { Header } from "../Header";
import { Main } from "../Main";
import { Movies } from "../Movies";
import { Footer } from "../Footer";

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Movies />
      {/* <Main /> */}
      <Footer />
    </div>
  );
};
