
import AboutMepicture from './imgs/image1-29-Edit.JPEG'
export default function AboutMe(){
    return(
        <section className="about-me">
        <h2>
          About <span>Me</span>
        </h2>
        <p className="description">
          I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.
        </p>
        <div className="about-me-grid">
          <div className="image-frame">
            <img src={AboutMepicture} alt="" />
          </div>
          <div>
            <ul>
              <li>
                First Name <span>Maddrick</span>
              </li>
              <li>
                Last Name <span>Long</span>
              </li>
              <li>
                Birthdate <span>January 30, 1985</span>
              </li>
              <li>
                Experience <span>1 year</span>
              </li>
            </ul>
            <h2 id="bio">My Bio</h2>
            <p>
              My name is Maddrick Long. I am the oldest of 4 siblings. I am located in
              Atlanta Georgia. I previously come from an IT background for the past 3
              years. Specializing in full stack web development. I having a passion
              for health and fitness and mentoring the youth. In my spare time, I
              enjoy traveling, spending time with family, and exercise.
            </p>
            <h2 id="skills">Skills</h2>
            <div className="skills">
              <ul>
                <li className="html">
                  <bdi>html</bdi>
                  <span>80%</span>
                </li>
                <li className="css">
                  <bdi>css</bdi>
                  <span>70%</span>
                </li>
                <li className="javascript">
                  <bdi>Javascript</bdi>
                  <span>65%</span>
                </li>
                <li className="mysql">
                  <bdi>mysql</bdi>
                  <span>75%</span>
                </li>
                <li className="react">
                  <bdi>react</bdi>
                  <span>80%</span>
                </li>
                <li className="nodejs">
                  <bdi>node.js</bdi>
                  <span>70%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
        
    )
}