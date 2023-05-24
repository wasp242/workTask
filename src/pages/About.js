import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about.css";
import img from "../img/1.jpg";

export const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="about-section">
            <h1 style={{ marginTop: "20px", marginBottom: "20px" }}>
              Досаев Александр
            </h1>
            <div className="d-flex">
              <img
                width={300}
                style={{ marginRight: "40px" }}
                src={img}
                alt="me"
              />
              <div>
                <p>Мужчина, 25 лет, родился 24 июня 1997</p>
                <p>+7 (917) 1521149</p>
                <p>alexander.dosaev@gmail.com — предпочитаемый способ связи</p>
                <p>
                  Другой сайт:{" "}
                  <a href="https://github.com/wasp242">
                    https://github.com/wasp242
                  </a>
                </p>
                <p>Проживает: Самара</p>
                <p>Гражданство: Россия, есть разрешение на работу: Россия</p>
                <p>Готов к переезду, готов к командировкам</p>
              </div>
            </div>
          </div>

          <div className="desired-position-section">
            <h4>Желаемая должность и зарплата</h4>
            <h2 style={{ fontWeight: "bold" }}>Front-end developer</h2>
          </div>

          <div className="specializations-section">
            <h4>Специализации:</h4>
            <ul>
              <li>Программист, разработчик</li>
            </ul>
          </div>

          <div className="employment-section">
            <h4>Занятость:</h4>
            <p>Полная занятость, частичная занятость</p>
          </div>

          <div className="work-schedule-section">
            <h4>График работы:</h4>
            <p>Полный день, сменный график, гибкий график, удаленная работа</p>
            <p>Желательное время в пути до работы: не имеет значения</p>
          </div>

          <div className="experience-section">
            <h4>Опыт работы — 3 года 5 месяцев</h4>
            <h3>Корвет</h3>
            <p>Менеджер по работе с клиентами</p>
            <p>B2B продажи</p>
            <p>Ведение контекстной рекламы</p>
            <p>Администрирование сайта</p>
          </div>

          <div className="education-section">
            <h4>Образование</h4>
            <h3>Самарский государственный технический университет, Самара</h3>
            <h5>Пгс</h5>
            <h3>Самарский лицей информационных технологий</h3>
            <h5>Январь 2020 — настоящее время (3 года 5 месяцев)</h5>
          </div>

          <div className="qualification-section">
            <h4>Повышение квалификации, курсы</h4>
            <p>2022</p>
            <h3>Algoritmika bootcamp</h3>
            <h5>Algoritmika.az, React developer</h5>
          </div>

          <div className="skills-section">
            <h4>Ключевые навыки</h4>
            <h5>
              Знание языков: Русский (Родной), Английский (B2 —
              Средне-продвинутый)
            </h5>
            <h5>
              Навыки:{" "}
              <strong>
                SQL, Git, CSS3, Less, HTML, JavaScript, REST API, Redux,
                ReactJS, Node.js
              </strong>
            </h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
