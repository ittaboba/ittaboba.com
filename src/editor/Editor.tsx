
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import './Editor.css'

import EditorHeader from './EditorHeader'
import EditorBody from './EditorBody'
import EditorFooter from './EditorFooter'

import Footer from '../footer/Footer'

import { css } from '@emotion/core';
import BounceLoader from 'react-spinners/BounceLoader';

function Editor() {

    let { id } = useParams()

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [content, setContent] = useState('')
    const [subject, setSubject] = useState('')

    const loaderCss = css`
        top: calc(50vh - 56px);
        margin-left: auto;
        margin-right: auto;
    `;
    
    useEffect(()=> {
        async function fetchArticle() {
            await fetch(process.env.REACT_APP_API_URL + '/article/' + id, {
                method: 'GET'
            })
            .then(res => {
                if(!res.ok){
                    throw new Error(res.statusText)
                }
                return res.json()
            })
            .then(res => {
                setTitle(res.title)
                setImage(res.image)
                setContent(res.content)
                setSubject(`[${res.type}] ${res.title}`)
            }, (error) => {
                console.log(error)
            });
        }

        fetchArticle()
    }, [id])

    return(
        <div style={{position: 'relative', top: '96px'}}>
            {
                (title === '' || image === '' || content === '') && 
                <BounceLoader
                    css={loaderCss}
                    sizeUnit={"px"}
                    size={40}
                    color={'#202020'}
                    loading={title === '' || image === '' || content === ''}
                />
            }
            {
                title !== '' && image !== '' && content !== '' && 
                <div>
                    <EditorHeader title={title} image={image}></EditorHeader>
                    <EditorBody content={content}></EditorBody>
                    <EditorFooter subject={subject}></EditorFooter>
                    <Footer />
                </div>  
            }
        </div>  
    )
}

export default Editor