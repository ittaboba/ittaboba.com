import React from 'react';

import './CookieBanner.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';

import { useCookies } from 'react-cookie';

function CookieBanner() {
    const [cookies, setCookie] = useCookies(['banner']);

    function closePressed() {
        setCookie('banner', true , { path: '/' });
    }

    return(
        <div>
            {
                !cookies.banner && <div className="Banner">
                    <Container>
                        <h2 className="BannerTitle">
                            Your privacy matters
                        </h2>
                        <Row>
                            <Col md={9}>
                                <div className="BannerMessage">
                                    I respect your privacy.
                                    This website installs technical and anonymized third-party cookies for aggregated statistics on usage.
                                    Moreover, in this website are embedded YouTube videos.
                                    YouTube has its own cookie and privacy policies over which I have no control.
                                    There is no installation of cookies from YouTube until you play a video.&nbsp;
                                    <Link className="BannerLink" to="/cookie-policy">More info</Link>
                                </div>
                            </Col>
                            <Col md={3} className="my-auto">
                                <Row className="justify-content-md-end justify-content-center">
                                    <button className="BannerButton" onClick={() => { closePressed() }}>
                                        Close
                                    </button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            }
        </div>
    )
}

export default CookieBanner