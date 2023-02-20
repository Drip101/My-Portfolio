import ProfileImg from './imgs/image1-29-Edit.JPEG'
export default function Bio() {
    return (
        <>
            <section className="main-grid">
                <div className="hero-image">
                    <img src={ProfileImg} alt="" />
                </div>
                <div className="hero-text">
                    <h5>Hi There!</h5>
                    <h1 style={{ fontSize: 50 }}>
                        I am <span className="gold"> Maddrick Long</span>
                    </h1>
                    <p>
                        I'm a Freelance Web Developer based in Atlanta, Georgia. I strive to
                        build immersive and beautiful web applications through carefully crafted
                        code and user-centric design.
                    </p>
                    <div className="profile-buttons">
                        <a href="#bio">My Bio</a>
                        <a
                            href="https://www.Linkedin.com/in/maddrick-long-1a967b59"
                            target="_blank"
                        >
                            Hire me
                        </a>
                    </div>
                </div>
            </section>
            &gt;
        </>

    )
}