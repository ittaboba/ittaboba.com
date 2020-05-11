
import React from 'react';
import Footer from '../footer/Footer';
import useScript from '../hooks/useScript';

function TermsOfUse() {

    useScript("https://cdn.iubenda.com/iubenda.js")

    return(
        <div>
            <div className="LegalText">
                <a href={process.env.REACT_APP_TERMS_OF_USE_URL} className="iubenda-black no-brand iubenda-embed iub-no-markup iub-body-embed" title="Terms and Conditions">Terms and Conditions</a>
            </div>
            <Footer/>
        </div>
    )
}

export default TermsOfUse;