import illu from "../../assets/image/sd7.jpeg";
import "./About.scss";

function About() {
  return (
    <section className="container">
      <div className="about-container">
        <h2>About Us</h2>
        <div className="about-sub-container">
          <div className="about-content">
            <p>
              
              Spade Diamonds, it&apos;s a family affair. A project started in 2008
              with the initial sole purpose of playing “la fête de la musique”
              in Meaux, where they are based. This lead to numerous musical
              projects: The first musical contest win in 2009, the first EP in
              2010, and a series of concerts throughout Paris and neighbouring
              cities, including venues such as le File7, l&apos;espace Caravalle, le
              Gibus, le Truskel and Les Disquaires.
              <br /><br />
                Spade Diamonds it&apos;s also a
              sound. British-rock based, French pop infused and classical
              musically coated, Spade Diamonds&apos; sound evolves with freedom
              between several universe, and becomes whole on stage where it is
              delivered with passion and intensity.
            </p>
          </div>
          <div className="about-illustration">
            <img src={illu} alt="illustration" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
