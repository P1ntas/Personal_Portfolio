import meter1 from "../assets/img/meter80.png";
import meter2 from "../assets/img/meter85.png";
import meter3 from "../assets/img/meter90.png";
import meter4 from "../assets/img/meter95.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>A showcase of both my technical and soft skills, whichI find valuable in order to 
                          make me a valuable full-stack junior developer.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Frontend</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Backend</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Databases</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Communication</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" /> 
                                <h5>Adaptability</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Attention to Detail</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}
