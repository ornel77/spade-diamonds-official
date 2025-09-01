import ed from "../../assets/image/ed.png";
import ornel from "../../assets/image/ornel.png";
import wendy from "../../assets/image/wendy.png";
import steph from "../../assets/image/steph.png";
import { motion } from "motion/react";
import "./Members.scss";

function Members() {
  return (
    <section className="container">
      <div className="members-container">
        <h2>Members</h2>
        <div className="grid-container">
          <motion.div
            className="sub-container"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <img src="/sd8.jpeg" alt="wendy" />
            <p>
              <span className="name">Wendy</span>
              <span className="function"> - singer, guitarist</span>
            </p>
          </motion.div>

          <motion.div
            className="sub-container"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <img src="/sd9.jpeg" alt="ed" />
            <p>
              <span className="name">Edwin</span>
              <span className="function"> - drummer, back vocal</span>
            </p>
          </motion.div>
          <motion.div
            className="sub-container"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <img src={ornel} alt="ornel" />
            <p>
              <span className="name">Ornella</span>
              <span className="function"> - guitarist, pianist</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Members;
