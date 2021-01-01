import React from 'react';
import './Home.css';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';
import LegalInformation from '../legal-information/LegalInformation';

function Home() {

    const colors = [
        '#EC331B',
        '#FF9728',
        '#FFD000',
        '#7ED321',
        '#17B9B8',
        '#007bff',
        '#7A3FBB'
    ]

    return(
        <div>
            <div className="HelloArea">
                <div className="Hello">
                    <span>Hello, I am&nbsp;</span>
                    <span style={{display: 'inline-block'}}>
                        <TypistLoop interval={200}>
                            {
                                [
                                    'Lorenzo',
                                    'a software engineer',
                                    'writing about creativity and technology',
                                    'a full stack developer',
                                    'an athlete',
                                    'italian',
                                    'studying AI'
                                ].map((text, i) => (
                                    <Typist key={text}>
                                        <span style={{color: colors[i]}}>{text}</span>
                                        <Typist.Backspace count={text.length} delay={1500} />
                                    </Typist> 
                                ))
                            }
                        </TypistLoop>
                    </span>
                </div>
            </div>
            <div className="LegalInformationArea">
                <LegalInformation />
            </div> 
        </div>
    );
}

export default Home;