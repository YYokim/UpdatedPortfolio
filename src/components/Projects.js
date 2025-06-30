import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assests/img/networking.jpg";
import projImg2 from "../assests/img/Logics.jpg";
import projImg3 from "../assests/img/robot.jpg";
import projImg4 from "../assests/img/lvnet.jpg";
import projImg5 from "../assests/img/compvision.jpg";
import projImg6 from "../assests/img/server.jpg";
import projImg7 from "../assests/img/hdl.jpg";
import projImg8 from "../assests/img/cir.jpg";
import projImg9 from "../assests/img/comarch.jpg";
import projImg10 from "../assests/img/networkings.jpg";
import projImg11 from "../assests/img/pcb.jpg";
import projImg12 from "../assests/img/lib.jpg";
import projImg13 from "../assests/img/pitch.jpg";
import projImg14 from "../assests/img/sem1.jpg";
import projImg15 from "../assests/img/bcc.jpg";
import projImg16 from "../assests/img/bccme.jpg";
import projImg17 from "../assests/img/sem2.jpg";
import projImg18 from "../assests/img/robotics.jpg";




import 'animate.css';
import TrackVisibility from "react-on-screen";


export const Projects = () =>{

    const projects =[
        {
      title: "Circuits Design",
      description: "Micro-Controller, Sensors, Power Supplies",
      imgUrl: projImg2,
    },
    {
      title: "Network Design",
      description: "Implementing protocols and network configuration",
      imgUrl: projImg1,
    },
    {
      title: "Maze Solving Robot",
      description: "Using Ultrasonic sensor for detection",
      imgUrl: projImg3,
    },
    {
      title: "Network Configuration",
      description: "Configure IP address and connections",
      imgUrl: projImg4,
    },
    {
      title: "Computer Vision",
      description: "Using machine learning for detection and classification",
      imgUrl: projImg5,
    },
    {
      title: "Server Configuration",
      description: "Server and routers establishing connection",
      imgUrl: projImg6,
    },
    ];

        const projects2 =[
        {
      title: "SR Flipflop Circuit",
      description: "SR flipflop with 7 segment display",
      imgUrl: projImg7,
    },
    {
      title: "Soldering Circuit",
      description: "Using Soldering Iron and Lead",
      imgUrl: projImg8,
    },
    {
      title: "Instruction Register",
      description: "An 8Bit instruction register",
      imgUrl: projImg9,
    },
    {
      title: "Network Planning and Visualization",
      description: "Using packet tracer to create a visual representation",
      imgUrl: projImg10,
    },
    {
      title: "PCB Designing ",
      description: "Using application tools to layout a PCB  ",
      imgUrl: projImg11,
    },
    {
      title: "PD Library System",
      description: "Library system for Project Design of the CPE Department",
      imgUrl: projImg12,
    },
    ];

        const projects3 =[
        {
      title: "Catalyst Collider Challenge",
      description: "Pitching and Demo Exhibition",
      imgUrl: projImg13,
    },
    {
      title: "Cloud Computing",
      description: "AWS base cloud computer",
      imgUrl: projImg14,
    },
    {
      title: "Blockchain Campus Conference",
      description: "Volunteering for a campus conference",
      imgUrl: projImg15,
    },
    {
      title: "Volunteering as organizer",
      description: "Organizer of a conference at Makati City",
      imgUrl: projImg16,
    },
    {
      title: "Ferroelectricity Seminar",
      description: "Seminar conducted at TIP Quezon City",
      imgUrl: projImg17,
    },
    {
      title: "MRSP Competition",
      description: "Ai Robotics at FEU Tech",
      imgUrl: projImg18,
    },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={isVisible ? "animate__animate animate__slideInUp": ""}>
                    <h2>Projects</h2>
                    <p>Throughout my journey as a Computer Engineering student, I’ve built several innovative projects that merge hardware, software, and real-world applications. My goal has always been to solve practical problems through smart technology.</p>
                    </div>}
                    </TrackVisibility>
                    <Tab.Container id="project-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">School Activities</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">School Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Seminar and Workshops</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project, index) =>{
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
                      <Row>
                            {
                                projects2.map((project, index) =>{
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
                    <Tab.Pane eventKey="third">

                        <Row>
                            {
                                projects3.map((project, index) =>{
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
                  </Tab.Content>
                  </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}