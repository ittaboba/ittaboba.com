
import React from 'react'

import Dante from '@ittaboba/dante2-cookie-free';

import './EditorBody.css';

type Props = {
    content: string;
}

function EditorBody({content}: Props) {

    function sameSiteCookie() {
        document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';
    }
    
    return(
        <div className="Body">
            {
                sameSiteCookie()
            }
            <Dante
                read_only={true}
                content={JSON.parse(content)}
            />
        </div>
    )
}

export default EditorBody