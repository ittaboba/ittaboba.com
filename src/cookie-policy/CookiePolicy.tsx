
import React from 'react';
import Footer from '../footer/Footer';
import useScript from '../hooks/useScript';

function CookiePolicy() {
    useScript("https://cdn.iubenda.com/iubenda.js")
    
    return(
        <div>
            <div className="LegalText">
                <a href={process.env.REACT_APP_COOKIE_POLICY_URL} className="iubenda-white no-brand iubenda-embed iub-no-markup iub-body-embed" title="Cookie Policy">Cookie Policy</a>
            </div>
            <Footer/>
        </div>
        
    )
}

export default CookiePolicy