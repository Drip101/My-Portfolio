import portfolioImg from './imgs/digital-marketing-meeting.jpg'
export default function myPortfolio(){
    return(
        <section id="MyWork" className="portfolio">
  <p></p>
  <h2>
    My <span>Portfolio</span>
  </h2>
  <p className="description">
    I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.
  </p>
  <p />
  <div className="p-grid">
    <div id="test" className="work">
      <img
        width="150px"
        height="200px"
        src={portfolioImg}
      />
      <a target="_blank" href="https://drip101.github.io/Challenge-Homework-1/">
        Challenge#1
      </a>
    </div>
    <div className="work">
      <img
        width="150px"
        height="200px"
        src="./images/digital-marketing-meeting.jpg"
      />
      <a target="_blank" href="https://drip101.github.io/Challenge-Homework-1/">
        Challenge#1
      </a>
    </div>
    <div className="work">
      <img
        width="150px"
        height="200px"
        src="./images/digital-marketing-meeting.jpg"
      />
      <a target="_blank" href="https://drip101.github.io/Challenge-Homework-1/">
        Challenge#1
      </a>
    </div>
    <div className="work">
      <img
        width="150px"
        height="200px"
        src="./images/digital-marketing-meeting.jpg"
      />
      <a target="_blank" href="https://drip101.github.io/Challenge-Homework-1/">
        Challenge#1
      </a>
    </div>
    <div className="work">
      <img
        width="150px"
        height="200px"
        src="./images/digital-marketing-meeting.jpg"
      />
      <a target="_blank" href="https://drip101.github.io/Challenge-Homework-1/">
        Challenge#1
      </a>
    </div>
    <div id="" />
    <div id="" />
    <div id="" />
  </div>
</section>

    )
}