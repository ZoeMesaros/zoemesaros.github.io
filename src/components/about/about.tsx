import "./about.scss";
import helloText from "../../assets/homepage/hello-site.png";

export const AboutMe = () => {
  return (
    <section id="about">
      <div className="textContainer">
        <fieldset>
          <legend>
            <h1>
              <img src={helloText} />
            </h1>
          </legend>
          <p>
            My name is Zoë, I'm a developer student at Medieinstitutet in
            Stockholm specializing in E-commerce. Computers have always been
            part of my life and is a big passion. I joined this school because i
            have always been fascinated with the web and how it works. My school
            is providing basic knowledge in both back and frontend development
            such as HTML, CSS/SCSS, JavaScript, Typescript, API, Database, PHP
            and React.
            <br />
            <br />
            Currently looking for LIA internship for beginning of 2024 between
            2024-02-05 and 2024-05-19.
          </p>
        </fieldset>
      </div>
    </section>
  );
};
