
import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function LegalInformation() {

    return(
        <Container>
            <div style={{display: "inline"}}>Copyright © 2020 Lorenzo Bernaschina. All Rights Reserved.&nbsp;</div>
            <Link style={{display: "inline"}} to="/privacy-policy">Privacy Policy</Link>
            <div style={{display: "inline"}}>&nbsp;|&nbsp;</div>
            <Link style={{display: "inline"}} to="/cookie-policy">Cookie Policy</Link>
            <div style={{display: "inline"}}>&nbsp;|&nbsp;</div>
            <Link style={{display: "inline"}} to="/terms-of-use">Terms of Use</Link>
        </Container>
    )
}

export default LegalInformation