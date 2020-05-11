import React, { useState, useEffect } from 'react';
import Footer from '../footer/Footer';

import Container from 'react-bootstrap/Container';
import Items from '../item/Items';
import { ArticleItem } from '../types';

import { css } from '@emotion/core';
import BounceLoader from 'react-spinners/BounceLoader';

import './Projects.css'

enum LoadingStatus {
    LOADING,
    SUCCESS,
    ERROR
}

function Projects() {

    const [projects, setProjects] = useState<ArticleItem[]>([]);
    const [loading, setLoading] = useState(LoadingStatus.LOADING);

    const loaderCss = css`
        top: calc(50vh - 56px);
        margin-left: auto;
        margin-right: auto;
    `;

    useEffect(() => {
        function fetchContent() {
            fetch(process.env.REACT_APP_API_URL + '/articles?type=Project&status=Published', {
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
                setProjects(p => p.concat(items))
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
                    <Container className="ProjectsContainer">
                        <h1 className="Title text-sm-left">Projects</h1>
                        <Items items={projects}></Items>
                    </Container> 
                    <Footer />
                </div>
            }
        </div>   
    );
}

export default Projects;