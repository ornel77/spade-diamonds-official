
import illu from '../../assets/image/sd7.jpeg'
import './About.scss'

function About() {
  return (
    <section className='container'>
      <div className="about-container">
              <h2>About Us</h2>
        <div className="about-sub-container">
            <div className='about-content'>
              <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci itaque corrupti ex est perferendis possimus maxime rem necessitatibus minima consequatur pariatur, recusandae amet animi quasi velit atque quam assumenda quisquam?
              </p>
            </div>
            <div className="about-illustration">
              <img src={illu} alt="" loading='lazy' />
            </div>
        </div>
      </div>
    </section>
  );
}

export default About;
