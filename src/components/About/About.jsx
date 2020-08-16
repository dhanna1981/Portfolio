import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Hello, and welcome to my portfolio website.  I am blessed and grateful that ou are here.  I have a passion for helping Small Busnisses WIN.  By reducing everyday business expenses and reinvesting the savings into strategic digital marketing campaigns, I help businesses compete with Big Business.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'One of the most effective ways to help Small Business grow is by building full stack web applications for their business.  This gives your business the look and feel of Big Business!  It also allows Small Businesses the safe functionality as large businesses.  The best part is, in most cases, I can find a way to reduce your expences so your new web presense will no increase your costs!'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    'Check out my Website by clicking the button below.  You will also see a host of other services my company offers!'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href="https://sbhelpgroup.com/"
                    >
                      SBHelpGroup
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
