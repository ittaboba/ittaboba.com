
import React, { useState, useEffect } from 'react';
import Footer from '../footer/Footer';

import Container from 'react-bootstrap/Container';
import Items from '../item/Items';
import { ArticleItem } from '../types'

import { css } from '@emotion/core';
import BounceLoader from 'react-spinners/BounceLoader';

import './Essays.css';

enum LoadingStatus {
    LOADING,
    SUCCESS,
    ERROR
}

function Essays() {

    const [essays, setEssays] = useState<ArticleItem[]>([]);
    const [loading, setLoading] = useState(LoadingStatus.LOADING);

    const loaderCss = css`
        top: calc(50vh - 56px);
        margin-left: auto;
        margin-right: auto;
    `;

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
                setLoading(LoadingStatus.SUCCESS)
                setEssays(e => e.concat(items))
            }, (error) => {
                setLoading(LoadingStatus.ERROR)
                console.log(error)
            });
        }

        fetchContent()
    }, [])

    return(
        <div style={{position: 'relative', top: '96px'}}>
            {
                (loading === LoadingStatus.LOADING) && 
                <BounceLoader
                    css={loaderCss}
                    sizeUnit={"px"}
                    size={40}
                    color={'#202020'}
                    loading={loading === LoadingStatus.LOADING}
                />
            }
            {
                (loading === LoadingStatus.SUCCESS) && <div>
                    <Container className="EssaysContainer">
                        <h1 className="Title text-sm-left">Essays</h1>
                        <Items items={essays}></Items>
                    </Container> 
                    <Footer />
                </div>
            }
        </div>      
    );
}

export default Essays;