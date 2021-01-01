import React from 'react'
import ReactGA from 'react-ga'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import './EditorFooter.css'


type Props = {
    subject: string;
}

function EditorFooter({subject}: Props) {

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
                    <Container>
                        <Row className="justify-content-center" style={{marginBottom: 25, fontFamily: "Helvetica Neue"}}>
                            Written with ❤️ using&nbsp;<a onClick={() => eventTracking('Gems banner', 'Gems link opened', `Gems link opened for ${subject}`)} href="https://www.gemsnotes.app/" target="_blank" rel="noopener noreferrer">Gems</a>
                        </Row>
                        <Row className="justify-content-center">
                            <a className="FollowTwitterButton" onClick={() => eventTracking('Social', 'Follow me on Twitter button pressed', `Follow me on Twitter button pressed for ${subject}`)} href="https://twitter.com/Ittaboba" target="_blank" rel="noopener noreferrer">
                                Follow me on Twitter
                            </a>
                        </Row>
                    </Container>
                </div>                
            </div>
        </div>
        
    )
}

export default EditorFooter