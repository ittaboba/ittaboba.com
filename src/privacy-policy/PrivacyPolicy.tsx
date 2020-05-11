import React from 'react';
import Footer from '../footer/Footer';
import useScript from '../hooks/useScript';

function PrivacyPolicy() {

    useScript("https://cdn.iubenda.com/iubenda.js")

    return(
        <div>
            <div className="LegalText">
            <a href={process.env.REACT_APP_PRIVACY_POLICY_URL} className="iubenda-black no-brand iubenda-embed iub-legal-only iub-no-markup iub-body-embed" title="Privacy Policy">Privacy Policy</a>
            </div>
            <Footer/>
        </div>
    )
}

export default PrivacyPolicy;