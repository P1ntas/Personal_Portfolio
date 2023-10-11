import { Col } from "react-bootstrap";
import navIcon2 from '../assets/img/nav-icon2.svg';

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-git">
            <p>View on Github</p>
            <a href="#"><img src={navIcon2} alt="" /></a>
          </div>
        </div>
      </div>
    </Col>
  )
}
