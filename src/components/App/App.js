import { useState } from "react";
import "./App.css";
import { Header } from "../Header";
import { Main } from "../Main";

export const App = () => {
  const [isLogin, setLogin] = useState(true);
  return (
    <div className="wrapper">
      <Header />
      {isLogin && <Main />}
    </div>
  );
};
