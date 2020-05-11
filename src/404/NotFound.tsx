import React from 'react';
import './NotFound.css';

function NotFound() {
    return(
        <div>
            <div className="NotFoundArea">
                <div className="NotFound">
                    <div className="NotFoundCode">404</div>
                    <div className="NotFoundMsg">Oops, page not found</div>
                </div>
            </div> 
        </div>
    )
}

export default NotFound;