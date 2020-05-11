import React from 'react';
import ReactGA from 'react-ga';

import {Link} from 'react-router-dom';

import './Footer.css';

import LegalInformation from '../legal-information/LegalInformation'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {

    function eventTracking(category: string, action: string, label: string) {
        ReactGA.event({
            category: category,
            action: action,
            label: label
        })
    }

    return(
        <div className="FooterArea">
            <div style={{maxWidth: "680px", marginLeft: "auto", marginRight: "auto"}}>
                <Container>
                    <Row className="justify-content-center">
                        <Col sm={4} style={{textAlign: "center", marginTop: "20px"}}>
                            <Link className="BannerAreaLink" to="/">
                                <Row className="justify-content-center justify-content-md-start">
                                    <img
                                        style={{color: 'white'}}
                                        src="/logo-light.svg"
                                        width="50"
                                        height="50"
                                        className="d-inline-block align-top"
                                        alt="Lorenzo Bernaschina's logo"
                                        />
                                    <div className="d-none d-sm-block">
                                        ittaboba.com
                                    </div>
                                </Row>
                            </Link>
                        </Col>
                        <Col sm={2} style={{textAlign: "center", marginTop: "20px"}}>
                            <Link className="BannerAreaLink" to="/projects">Projects</Link>
                        </Col>
                        <Col sm={2} style={{textAlign: "center", marginTop: "20px"}}>
                            <Link className="BannerAreaLink" to="/about">About</Link>
                        </Col>
                        <Col sm={2} style={{textAlign: "center", marginTop: "20px"}}>
                            <Link className="BannerAreaLink" to="/contacts">Contacts</Link>
                        </Col>
                    </Row>
                    <p className="FollowOn">Follow on</p>
                    <Row className="justify-content-center SocialArea">
                        <a className="SocialButton" onClick={() => eventTracking('Social', 'Visited social newtork profile from Footer', 'Visited Facebook')} href="https://www.facebook.com/lorenzo.bernaschina" target="_blank" rel="noopener noreferrer">
                            <p className="icon-facebook"></p>
                        </a>

                        <a className="SocialButton" onClick={() => eventTracking('Social', 'Visited social newtork profile from Footer', 'Visited Twitter')} href="https://twitter.com/Ittaboba" target="_blank" rel="noopener noreferrer">
                            <p className="icon-twitter"></p>
                        </a>

                        <a className="SocialButton" onClick={() => eventTracking('Social', 'Visited social newtork profile from Footer', 'Visited Linkedin')} href="https://www.linkedin.com/in/lorenzo-bernaschina-669a08b9/" target="_blank" rel="noopener noreferrer">
                            <p className="icon-linkedin"></p>
                        </a>

                        <a className="SocialButton" onClick={() => eventTracking('Social', 'Visited social newtork profile from Footer', 'Visited Instagram')} href="https://www.instagram.com/ittaboba/" target="_blank" rel="noopener noreferrer">
                            <p className="icon-instagram"></p>
                        </a>

                        <a className="SocialButton" onClick={() => eventTracking('Social', 'Visited social newtork profile from Footer', 'Visited Github')} href="https://github.com/ittaboba" target="_blank" rel="noopener noreferrer">
                            <p className="icon-github-circled"></p>
                        </a>
                    </Row>
                    <div className="LegalBanner">
                        <LegalInformation />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Footer