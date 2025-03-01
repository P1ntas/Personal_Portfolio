import meter1 from "../assets/img/patagonia.jpeg";
import meter2 from "../assets/img/brazil.jpeg";
import meter3 from "../assets/img/bali.jpeg";
import meter4 from "../assets/img/bolivia.jpeg";
import meter5 from "../assets/img/singapore.jpeg";
import meter6 from "../assets/img/italy.jpeg";
import meter7 from "../assets/img/machu.jpeg";
import meter8 from "../assets/img/dubai.jpeg";
import meter9 from "../assets/img/vienna.jpeg";
import meter10 from "../assets/img/colombia.jpeg";
import meter11 from "../assets/img/athens.jpeg";
import meter12 from "../assets/img/chile.jpeg";
import meter13 from "../assets/img/amsterdam.jpeg";
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
                        <h2>Trips</h2>
                        <p>I have a strong interest in software development and a deep passion for traveling and experiencing different cultures. 
                          <br></br>Here are some of the countries I’ve visited:
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Singapore</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Argentina</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Brazil</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Indonesia</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" /> 
                                <h5>Bolivia</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>Italy</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>Peru</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>UAE</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>Austria</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Image" />
                                <h5>Colombia</h5>
                            </div>
                            <div className="item">
                                <img src={meter11} alt="Image" />
                                <h5>Greece</h5>
                            </div>
                            <div className="item">
                                <img src={meter12} alt="Image" />
                                <h5>Chile</h5>
                            </div>
                            <div className="item">
                                <img src={meter13} alt="Image" />
                                <h5>Netherlands</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}
