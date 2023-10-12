import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg from "../assets/img/proj_lbaw.png";
import projImg2 from "../assets/img/proj_aed.png";
import projImg3 from "../assets/img/proj_lcom.JPG";
import projImg4 from "../assets/img/under_work.jpg";
import projImg5 from "../assets/img/proj_esof.JPG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Bookstore Website",
      description: "Developed an e-commerce website based on Laravel",
      imgUrl: projImg,
      url: "aaa",
    },
    {
      title: "Asteroid Game",
      description: "Implemented graphics cards, keyboard and mouse drivers for a game in C ",
      imgUrl: projImg3,
      url: "aaa",
    },
    {
      title: "Mobile App",
      description: "Designed a mobile app for FEUP students by accessing the API of the official website",
      imgUrl: projImg5,
      url: "aaa",
    },
    {
      title: "Quickest path",
      description: "Mapped STCP bus stops to a graph in order to find quickest route between two coordinates",
      imgUrl: projImg2,
      url: "aaa",
    },
    {
      title: "Real-time editor app",
      description: "Implemented a local-first app that allows real-time collaborative editing, using Amazon Dynamo and CRDTs",
      imgUrl: projImg4,
      url: "aaa",
    },
    {
      title: "Premier League Search Engine",
      description: "Developed a search engine for Premier League related statistics and news",
      imgUrl: projImg4,
      url: "aaa",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of the projects I developed while in college, as well as a few I've developed in my own personal time</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Certifications</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
