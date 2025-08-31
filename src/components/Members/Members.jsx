
import ed from '../../assets/image/ed.png'
import ornel from '../../assets/image/ornel.png'
import wendy from '../../assets/image/wendy.png'
import steph from '../../assets/image/steph.png'
import './Members.scss'

function Members() {
  return (
    // wendy 8853 metassos 2022
    // ed 8899 metassos 2022
    <section className='container'>
        <div className="members-container">
            <h2>Members</h2>
            <div className="grid-container">
            <div className="sub-container">
                    <img src="/sd8.jpeg" alt="wendy" />
                    <p>
                        <span className="name">Wendy</span>
                        <span className="function"> - singer, guitarist</span>
                    </p>
                </div>
                
                <div className="sub-container">
                    <img src="/sd9.jpeg" alt="ed" />
                    <p>
                        <span className="name">Edwin</span>
                        <span className="function"> - drummer, back vocal</span>
                    </p>
                </div>
                <div className="sub-container">
                    <img src={ornel} alt="ornel" />
                    <p>
                        <span className="name">Ornella</span>
                        <span className="function"> - guitarist, pianist</span>
                    </p>
                </div>
            
                {/* <div className="sub-container">
                    <img src={steph} alt="steph" />
                    <p>
                        <span className="name">Stéphane</span>
                        <span className="function"> - drummer</span>
                    </p>
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default Members