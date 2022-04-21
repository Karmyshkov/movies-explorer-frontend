import "./AboutMe.css";
import avatar from "../../images/avatar.jpg";

export const AboutMe = () => {
  return (
    <div className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__row">
        <div className="about-me__inner">
          <p className="about-me__name">Евгений</p>
          <p className="about-me__profession">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть
            жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал
            кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл
            курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной
            работы.
          </p>
          <ul className="about-me__wrap">
            <li className="about-me__item">
              <a className="about-me__link" href="/">
                Facebook
              </a>
            </li>
            <li className="about-me__item">
              <a className="about-me__link" href="/">
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className="about-me__avatar" src={avatar} alt="" />
      </div>
    </div>
  );
};
