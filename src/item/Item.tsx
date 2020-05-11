
import React from 'react'

import './Item.css'

type Props = {
    title: string,
    image: string
}

function Item({title, image}: Props) {
    return(
        <div className="Item">
            <div className="ItemImage" style={{backgroundImage: `url(${image})`}}>
                <div className="ItemTitleArea">
                    <div className="ItemTitle">{title}</div>
                </div>
                <div className="ItemFilter"></div>
            </div>
        </div>
    )
}

export default Item