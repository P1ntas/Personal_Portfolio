import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import headerImg from "../assets/img/photo.png";
import CV from "../assets/Curriculum.pdf";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Frontend", "Backend", "Full-Stack" ];
  const period = 2000;
  const element = <FontAwesomeIcon icon={faDownload} />

  const handleDownloadCV = () => {
    const anchor = document.createElement("a");
    anchor.href = CV;
    anchor.download = "CV_Afonso_Pinto.pdf";
    anchor.click();
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <Router>
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>{`Hi! I'm Afonso\n`} <br /> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full-Stack", "Scrum", "Algorithms" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I’m a 23-year-old finishing my Master’s in Informatics and Computing Engineering, with a strong interest in software engineering. Through internships, I’ve sharpened my skills, focusing on efficient, scalable solutions.
                  </p>
                  <p>
                  I’m seeking opportunities across Europe to contribute to innovative teams and continue growing in this field.
                  </p>
                  <button>
                    <HashLink to="#connect" style={{ textDecoration: 'none', color: '#0C4160'}}>
                      Let’s Connect <ArrowRightCircle size={25} />
                    </HashLink>
                  </button>
                  <button className="cv bton" onClick={handleDownloadCV}>Download CV {element}</button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="My image"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    </Router>
  )
}
