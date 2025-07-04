import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assests/img/green.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Backend Developer","Innovator","Data Science"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() =>{
        let ticker = setInterval(() => {
            tick();
        },delta)
        
        return () =>{clearInterval(ticker)};
    }, [text])

    const tick= () =>{
        let i =loopNum % toRotate.length
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText ===fullText){
            setIsDeleting(true);
            setDelta(period);
            } else if (isDeleting && updatedText === ''){
                setIsDeleting(false);
                setLoopNum(loopNum + 1)
                setDelta (500);
            }
    }

    return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>{`Hi! I'm Marc Victor Causapin`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Data Science", "Backend Developer", "Innovator" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a Computer Engineering student at Technological Institute of the Philippines-Manila Campus, specializing in Data Science with a focus on Machine Learning and Computer Vision.  I aspire to be a globally competitive person driven by a passion for using technology to solve real-world problems through smart design and innovation.</p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}