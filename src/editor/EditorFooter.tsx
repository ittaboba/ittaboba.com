import React, { useState } from 'react'
import ReactGA from 'react-ga'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'

import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton
} from 'react-share'

import './EditorFooter.css'
import EmailForm from '../email-form/EmailForm'

type Props = {
    subject: string;
}

function EditorFooter({subject}: Props) {

    const [showModal, setShowModal] = useState(false)

    function eventTracking(category: string, action: string, label: string) {
        ReactGA.event({
            category: category,
            action: action,
            label: label
        })
    }

    return(
        <div>
            <div className="Footer">
                <div className="FooterContainer">
                    <Row>
                        <Col sm={8}>
                            <Container>
                                <Row className="justify-content-sm-start justify-content-center">
                                    <p className="StartConversationTitle">You have come this far for a reason :)</p>
                                </Row>
                            </Container>
                            <Container>
                                <Row className="justify-content-sm-start justify-content-center">
                                    <button className="StartConversationButton" onClick={()=>{
                                        setShowModal(true)
                                        eventTracking('User', 'Leave feedback button pressed', `Leave feedback button pressed for ${subject}`)
                                    }}>
                                        Leave feedback
                                    </button>
                                </Row>
                            </Container>
                        </Col>
                        <Col sm={4}>
                            <Container>
                                <Row className="justify-content-sm-start justify-content-center">
                                    <p className="ShareOnTitle">Tell a friend</p>
                                </Row>
                            </Container>
                            <Container>
                                <Row className="justify-content-sm-start justify-content-center">
                                    <FacebookShareButton url={window.location.href}>
                                        <div onClick={()=> {
                                                eventTracking('Social', 'Share article button pressed', `Share ${subject} on Facebook`)
                                            }} className="ShareOnButton" style={{marginRight: '5px'}}>
                                            <i className="icon-facebook" />
                                        </div>
                                    </FacebookShareButton>
                                    <TwitterShareButton url={window.location.href}>
                                        <div onClick={()=> {
                                                eventTracking('Social', 'Share article button pressed', `Share ${subject} on Twitter`)
                                            }} className="ShareOnButton" style={{marginLeft: '5px', marginRight: '5px'}}>
                                            <i className="icon-twitter" />
                                        </div>
                                    </TwitterShareButton>
                                    <LinkedinShareButton url={window.location.href}>
                                        <div onClick={()=> {
                                                eventTracking('Social', 'Share article button pressed', `Share ${subject} on Linkedin`)
                                            }} className="ShareOnButton" style={{marginLeft: '5px'}}>
                                            <i className="icon-linkedin" />
                                        </div>
                                    </LinkedinShareButton>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </div>
            </div>

            <Modal dialogClassName="CustomDialog" show={showModal} onHide={()=>{setShowModal(false)}} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body>
                    <EmailForm subject={subject}></EmailForm>
                </Modal.Body>
            </Modal>
        </div>
        
    )
}

export default EditorFooter