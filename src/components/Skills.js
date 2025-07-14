import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cisco1 from "../assests/img/Cisco1.jpg";
import logics from "../assests/img/logicsdes.jpg";
import ml from "../assests/img/ml.jpg";
import db from "../assests/img/db.jpg";
import py from "../assests/img/python.png";
import bd from "../assests/img/backendlg.svg";
import django from "../assests/img/django.jpg";
import colorSharp from "../assests/img/bgp.jpg"


export const Skills = () =>{
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
    }
    
    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>As a Computer Engineering student with hands-on experience in IoT, embedded systems, and full-stack development, I specialize in building smart, efficient, and user-friendly solutions that bridge hardware and software. I enjoy turning real-world challenges into working prototypes—from sensor-based systems to responsive web apps. My diverse skill set allows me to innovate across various domains like automation, networking, and machine learning.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={cisco1} alt="pics"/>
                                <h5>Cisco Networking</h5>
                            </div>
                            <div className="item">
                                <img src={django} alt="pics"/>
                                <h5>Django Framework</h5>
                            </div>
                            <div className="item">
                                <img src={ml} alt="pics"/>
                                <h5>Data Science</h5>
                            </div>
                            <div className="item">
                                <img src={py} alt="pics"/>
                                <h5>Python Programming</h5>
                            </div>
                            <div className="item">
                                <img src={db} alt="pics"/>
                                <h5>Database Designer</h5>
                            </div>
                            <div className="item">
                                <img src={bd} alt="pics"/>
                                <h5>Backend Development</h5>
                            </div>
                                <div className="item">
                                <img src={logics} alt="pics"/>
                                <h5>Logic Circuits</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="pic" />
        </section>
    )
}