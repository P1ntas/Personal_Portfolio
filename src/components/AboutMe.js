import aboutImg from "../assets/img/about.png";

export const AboutMe = () => {
    return (
      <section id="aboutme" className="about--section">
        <div className="about--section--img">
          <img src={aboutImg} alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
              I have a great appreciation for a variety of interests and activities that add to my life 
              outside of my studies and work. 
            </p>
            <p className="hero--section-description">
              I've always been passionate about volunteering since it allows me to give back to society. 
              This rewarding experience gives me the chance to not only have an impact on the world but 
              also gives me a fresh outlook and the chance to meet motivational people. 
            </p>
            <p className="hero--section-description">
              I find comfort and excitement in a variety of things when I'm neither studying nor travelling 
              to distant countries. Playing video games, reading books, and analyzing the intricate details of
              movies and TV shows all provide little moments of escape. 
            </p>
            <p className="hero--section-description">
              I have a strong passion for sports, especially football and handball, the latter of which I 
              played for several years. Even though I'm not currently enrolled on a team, staying active 
              is still a priority for me, and I'm frequently accompanied by my trusty go-to Spotify playlist.
            </p>
          </div>
        </div>
      </section>
    );
  }