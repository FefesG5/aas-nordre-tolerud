import ingvar from "../images/ingvar.jpg";
import "../styles/about.css";

function About() {
  return (
    <div className="about-container">
      <h2>Meet Ingvar</h2>
      <img
        src={ingvar}
        alt="Owner sitting on a rock in Engerdal"
        className="about-image"
      />
      <p className="about-text">
        A humble chef with a love for cooking and a great sense of humor. With a
        desire to create delicious and satisfying meals, Ingvar blends taste,
        presentation, and quality to create unforgettable culinary experiences.
        As a local in his hometown, Ingvar is proud to use only the freshest
        ingredients, ensuring each dish is made with care and attention to
        detail.
      </p>
      <p className="about-text">
        Join Ingvar for a delightful meal, where humor and deliciousness come
        together in perfect harmony.
      </p>
    </div>
  );
}

export default About;
