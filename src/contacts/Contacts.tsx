
import React from 'react';
import ReactGA from 'react-ga';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import EmailForm from '../email-form/EmailForm'

import Footer from '../footer/Footer'

import './Contacts.css'

function Contacts() {

    function eventTracking(category: string, action: string, label: string) {
        ReactGA.event({
            category: category,
            action: action,
            label: label
        })
    }

    return(
        <div style={{position: 'relative', top: '96px'}}>
            <Container className="ContactsContainer">
                <h1 className="Title">Contacts</h1>
                <Row className="ContactsRow">
                    <Col lg={6} style={{marginBottom: '20px'}}>
                        <div style={{backgroundImage: `url(${require('../assets/contacts-image.jpg')})`}} className="Img"></div>
                        <Row className="justify-content-center">
                            <a className="SocialButton" onClick={() => eventTracking('Social', 'Visited social newtork profile from Contacts', 'Visited Reddit')} href="https://www.reddit.com/user/ittaboba" target="_blank" rel="noopener noreferrer">
                                <p className="icon-reddit-alien"></p>
                            </a>

                            <a className="SocialButton" onClick={() => eventTracking('Social', 'Visited social newtork profile from Contacts', 'Visited Twitter')} href="https://twitter.com/Ittaboba" target="_blank" rel="noopener noreferrer">
                                <p className="icon-twitter"></p>
                            </a>

                            <a className="SocialButton" onClick={() => eventTracking('Social', 'Visited social newtork profile from Contacts', 'Visited Linkedin')} href="https://www.linkedin.com/in/lorenzo-bernaschina-669a08b9/" target="_blank" rel="noopener noreferrer">
                                <p className="icon-linkedin"></p>
                            </a>

                            <a className="SocialButton" onClick={() => eventTracking('Social', 'Visited social newtork profile from Contacts', 'Visited Indie Hackers')} href="https://www.indiehackers.com/ittaboba" target="_blank" rel="noopener noreferrer">
                                <p className="icon-indiehackerslogo"></p>
                            </a>

                            <a className="SocialButton" onClick={() => eventTracking('Social', 'Visited social newtork profile from Contacts', 'Visited Github')} href="https://github.com/ittaboba" target="_blank" rel="noopener noreferrer">
                                <p className="icon-github-circled"></p>
                            </a>
                        </Row>
                    </Col>
                    <Col lg={6} style={{marginBottom: '20px'}}>
                        <EmailForm subject={'Contacts'}></EmailForm>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Contacts