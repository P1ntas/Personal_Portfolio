import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg from "../assets/img/proj_lbaw.png";
import projImg2 from "../assets/img/optiiscan.png";
import projImg3 from "../assets/img/proj_lcom.JPG";
import projImg4 from "../assets/img/pri.png";
import projImg5 from "../assets/img/proj_esof.JPG";
import projImg6 from "../assets/img/sdle.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Bookstore Website",
      description: "Developed an e-commerce website based on Laravel",
      imgUrl: projImg,
      url: "https://www.github.com/P1ntas/LBAW",
    },
    {
      title: "Asteroid Game",
      description: "Implemented graphics cards, keyboard and mouse drivers for a game in C ",
      imgUrl: projImg3,
      url: "https://www.github.com/P1ntas/LCOM",
    },
    {
      title: "Mobile App",
      description: "Designed a mobile app for FEUP students by accessing the API of the official website",
      imgUrl: projImg5,
      url: "https://www.github.com/P1ntas/ESOF",
    },
    {
      title: "Extract data from image",
      description: "AI-powered tool for extracting product data from images, automating data entry and improving accuracy with computer vision.",
      imgUrl: projImg2,
      url: "https://github.com/P1ntas/Optiiscan",
    },
    {
      title: "Real-time editor app",
      description: "Implemented a local-first app that allows real-time collaborative editing, using Amazon Dynamo and CRDTs",
      imgUrl: projImg6,
      url: "https://github.com/yoxerao/SDLE-PROJ",
    },
    {
      title: "Premier League Search Engine",
      description: "Developed a search engine for Premier League related statistics and news",
      imgUrl: projImg4,
      url: "https://github.com/joao-teixeira02/PRI-proj",
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
                <p>Here are some of the projects I developed, as well as my work experience and master thesis.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Thesis</Nav.Link>
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
                    <p className="internship">Research Intern | Kevel</p>
                      <p className="internship">September 2024 – July 2025</p>
                      <ul className="intern int3">
                        <li className="menu-item">
                        Designed and developed an open-source SOAR (Security Orchestration, Automation, and Response) system using Wazuh, Shuffle, and theHive.
                        </li>
                        <li className="menu-item">
                        This solution provides a cost-effective alternative to existing offerings by eliminating licensing expenses.
                        </li>
                        <li className="menu-item">
                        Automated SOC workflows to accelerate incident response by 70% in distributed environments.
                        </li>
                        <li className="menu-item">
                        Analyzed vulnerabilities with penetration testing, improving detection coverage by 50%.
                        </li>
                        <li>
                        Integrated open-source tools into existing software, delivering real-time alerts for critical incidents.
                        </li>
                      </ul>
                      <p className="internship">Software Engineer Intern | SecurNet</p>
                      <p className="internship">February 2023 - June 2023</p>
                      <ul className="intern">
                        <li className="menu-item">
                        Designed and developed an open-source SOAR (Security Orchestration, Automation, and Response) system using Wazuh, Shuffle, and theHive.
                        </li>
                        <li className="menu-item">
                        This solution provides a cost-effective alternative to existing offerings by eliminating licensing expenses.
                        </li>
                        <li className="menu-item">
                        Automated SOC workflows to accelerate incident response by 70% in distributed environments.
                        </li>
                        <li className="menu-item">
                        Analyzed vulnerabilities with penetration testing, improving detection coverage by 50%.
                        </li>
                        <li>
                        Integrated open-source tools into existing software, delivering real-time alerts for critical incidents.
                        </li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p className="tthesis">Comparing columnar vectorization with indexes for real-time analytics and query systems</p>
                      <p className="tthesiscon">
                        <ul className="intern int2">
                          <li className="menu-item">I collaborated with Kevel to develop my master's thesis, focusing on enhancing OLAP workloads through advanced columnar vectorization and indexing techniques. </li>
                          <li className="menu-item">My research improved the performance of column-oriented query engines by leveraging SIMD- optimized vector instructions, improving query performance by 45%. </li>
                          <li className="menu-item">SIMD optimizations boosted scan throughput by 30%, taking advantage of modern CPU architectures and cache sizes. </li>
                          <li className="menu-item">These optimizations enable faster, real-time analytical insights, benefiting both business and scientific applications.</li>
                        </ul>
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
