import "./About.css";
import homePhoto from "../../assets/home_photo.jpg";

export default function About() {
  return (
    <section className="about">
      <img src={homePhoto} alt="Photo of Jose Soto" className="about__image" />
      <div className="about__info">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          Hi, I&apos;m Jose Soto, a full-stack developer currently completing
          the Software Engineering program at TripleTen. I build responsive,
          user-friendly web applications using React, Node.js, Express, and
          MongoDB.<br></br>
          <br />
          Through TripleTen I&apos;ve developed hands-on experience with REST
          APIs, JWT authentication, deployment on Google Cloud, and modern
          JavaScript best practices. Whether you need a sleek frontend or a
          robust backend, I&apos;m here to help bring your ideas to life.
        </p>
      </div>
    </section>
  );
}
