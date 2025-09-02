import ed from "../../assets/image/ed.png";
import ornel from "../../assets/image/ornel.png";
import wendy from "../../assets/image/wendy.png";
import steph from "../../assets/image/steph.png";
import "./Members.scss";

function Members() {
  return (
    <section className="container">
      <div className="members-container">
        <h2>Members</h2>
        <div className="grid-container">
          <div
            className="sub-container"
          >
            <img src="/sd8.webp" alt="wendy" loading="lazy" />
            <p>
              <span className="name">Wendy</span>
              <span className="function"> - singer, guitarist</span>
            </p>
          </div>

          <div
            className="sub-container"
          >
            <img src="/sd9.jpg" alt="ed" loading="lazy" />
            <p>
              <span className="name">Edwin</span>
              <span className="function"> - drummer, back vocal</span>
            </p>
          </div>
          <div
            className="sub-container"
          >
            <img src="/sd10.webp" alt="ornel" loading="lazy" />
            <p>
              <span className="name">Ornella</span>
              <span className="function"> - guitarist, pianist</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Members;
