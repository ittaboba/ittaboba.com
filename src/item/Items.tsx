
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Item from './Item';

import { ArticleItem } from '../types'

type Props = {
    items: ArticleItem[]
}

function Items({items}: Props) {
    return(
        <div>
            <Row>
                {
                    items.map(el => (
                        <Col key={el._id} md={4}>
                            <Link style={{textDecoration: 'none'}} to={`article/${el._id}`}>
                                <Item title={el.title} image={el.image}></Item>
                            </Link>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default Items