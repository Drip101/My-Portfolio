
import Linkedin from './imgs/linkedin.png'
import Github from './imgs/github.png'
import Gmail from './imgs/gmail-logo.png'
import Plane from './imgs/paper-plane.png'
export default function ContactMe() {
    return (<section id="ContactMe" className="ContactMe">
    <h2>
      Contact <span>Me</span>
    </h2>
    <p className="description">
      I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.
    </p>
    <div className="contact-2">
      <div className="c-left">
        <a
          target="_blank"
          href="https://www.Linkedin.com/in/maddrick-long-1a967b59"
        >
          <img src={Linkedin} />
          <span>Maddrick Long</span>
        </a>
        <a target="_blank" href="https://github.com/Drip101">
          <img src={Github} />
          <span>drip101</span>
        </a>
        <a target="_blank" href="mailto:Maddrick24@gmail.com">
          <img src={Gmail} />
          <span>Maddrick24</span>
        </a>
      </div>
      <div className=" c-right">
        <p>
          {" "}
          Aut tempora eveniet cumque nobis laudantium repudiandae esse? Enim quis
          vitae in vel ipsa! Beatae, in adipisci ipsam voluptatum dignissimos
          omnis cupiditate!
        </p>
        <form method="post" action="">
          <div className="i-2">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <textarea placeholder="Message" defaultValue={""} />
          </div>{" "}
          <button className="submit" type="submit">
            <img src={Plane} alt="" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
  )
}