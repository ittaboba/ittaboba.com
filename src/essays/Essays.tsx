
import React, { useState, useEffect } from 'react';
import './Essays.css';

import Container from 'react-bootstrap/Container';

import Items from '../item/Items';

import { ArticleItem } from '../types'

function Essays() {

    const [essays, setEssays] = useState<ArticleItem[]>([]);

    useEffect(() => {
        function fetchContent() {
            fetch(process.env.REACT_APP_API_URL + '/articles?type=Essay&status=Published', {
                method: 'GET'
            })
            .then(res => {
                if(!res.ok){
                    throw new Error(res.statusText)
                }
                return res.json()
            })
            .then(items => {
                setEssays(e => e.concat(items))
            }, (error) => {
                console.log(error)
            });
        }

        fetchContent()
    }, [])

    return(
        <div style={{position: 'relative', top: '96px'}}>
            <Container>
                <h1 className="Title text-sm-left">Essays</h1>
                <Items items={essays}></Items>
            </Container> 
        </div>   
    );
}

export default Essays;