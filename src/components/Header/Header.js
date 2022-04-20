import "./Header.css";
import logo from "../../images/icons/logo.svg";

export const Header = () => {
  return (
    <div className="header">
      <a className="header__logo" href="/">
        <img src={logo} alt="Логотип учебного проекта" />
      </a>
      <div className="header__wrap">
        <a className="header__link" href="/sign-up">
          Регистрация
        </a>
        <a className="header__link header__link_active" href="/sign-in">
          Войти
        </a>
      </div>
    </div>
  );
};
