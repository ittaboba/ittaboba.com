import React from 'react';
import './EditorHeader.css';

type Props = {
    title: string;
    image: string;
}

function EditorHeader({title, image}: Props) {

    return (
        <div>
            <div className="HeaderImage" style={{backgroundImage: `url(${image})`}}></div>

            <div className="HeaderTitleArea">
                <div className="HeaderTitle">{title}</div>
            </div>
            <div className="HeaderFilter"></div>
            
        </div>
    )
}

export default EditorHeader;