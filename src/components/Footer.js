import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo_footer.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="www.linkedin.com/in/afonso-pinto-83a50a256"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/P1ntas"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/afonso_pinto_02?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright <span id="year"></span> &copy;<br />All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

document.addEventListener("DOMContentLoaded", function() {
  const yearElement = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
});