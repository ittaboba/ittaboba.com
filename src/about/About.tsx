
import React from 'react';
import './About.css';

import Footer from '../footer/Footer';

import InfiniteCarousel from 'react-leaf-carousel';

import Container from 'react-bootstrap/Container';
    
function About() {
    return(
        <div style={{position: 'relative', top: '96px'}}>
            <Container>
                <h1 className="Title">About</h1>
                <InfiniteCarousel
                    breakpoints={[
                        {
                            breakpoint: 576,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                }
                        }
                    ]}
                    slidesToShow={3}
                    slidesToScroll={1}
                    autoCycle={true}
                    cycleInterval={5000}
                    animationDuration={1500}
                    arrows={false}
                    dots={false}
                    showSides={false}
                    scrollOnDevice={true}
                >
                <div className="CarouselItem">
                    <img
                        alt=''
                        src={require('../assets/About01.jpg')}
                    />
                </div>
                <div className="CarouselItem">
                    <img
                        alt=''
                        src={require('../assets/About02.jpg')}
                    />
                </div>
                <div className="CarouselItem">
                    <img
                        alt=''
                        src={require('../assets/About03.jpg')}
                    />
                </div>
                <div className="CarouselItem">
                    <img
                        alt=''
                        src={require('../assets/About04.jpg')}
                    />
                </div>
                <div className="CarouselItem">
                    <img
                        alt=''
                        src={require('../assets/About05.jpg')}
                    />
                </div>
                </InfiniteCarousel>
                <div className="Text">
                    <div className="Content">
                        Hello, I am Lorenzo. Welcome on my website. 
                        <br/>
                        <br/>
                        I am from Lake Como but I live and work in Milan, Italy.
                        <br/>
                        I am passionate about sport and technology and I have many other interests that I am going to share with you in my projects and articles. 
                        <br/>
                        <br/>
                        I spent my childhood and adolescence dreaming to go to the Olympics in track and field. 
                        I was 5, seating on the floor in front of the TV watching the Sydney 2000 Olympic Games. I felt inspired by the athletes’ performances and the De Coubertin’s values, so I asked my parents to take me to a red track.
                        <br/>
                        <br/>
                        Ten years later, at 15, I got my first national title in triple jump. 
                        But after a few more races I had a bad injury that took me years to heal. 
                        I was competing for the regional title when my ankle gave away during a jump. 
                        I finished second. Still the guy who won was stronger than me and today he is one of the most promising and talented athletes of the Italia Team. 
                        Since then I started a long rehabilitation process facing some complications along the way.
                        <br/>
                        <br/>
                        While recovering my parents gave me an iMac for my sixteenth birthday. 
                        At first, I used it to analyze my jumps and to edit sports videos. 
                        Then, a few months later, a hobbyist magazine published a course to make iPhone apps that caught my attention. 
                        Since it was too difficult for a beginner, for Christmas I asked for books to learn to code. 
                        So I began my journey in computer science as a self-taught. 
                        I spent nights learning the basics and practicing in C language before coming back to the course. 
                        I published my first app on the App Store a year later, at 17. 
                        <br/>
                        <br/>
                        I’ve always enjoyed working on ideas. 
                        In my childhood I loved painting and creating with paper-mâché and cardboards. 
                        I chose to learn to code because I thought it was a powerful tool to turn imagination into reality. 
                        When I developed and published my first app, I had confirmation of it. 
                        It was revelatory. 
                        But most importantly, I felt I was making a useful contribution on people's lives since I received appreciation and feedback.
                        <br/>
                        <br/>
                        Meanwhile I went back to the track and at 21 I got a regional senior title setting a new personal best in long jump. 
                        But with the passing of the years, the occurrence of other critical injuries that made me miss many opportunities forced me to make a hard choice.
                        <br/>
                        <br/>
                        Today I am a software engineer and I am still feeding with new challenges my passion for running. 
                        Both computer science and sport taught me important lessons about hard work, perseverance and independence of thought that are driving me in my daily life.
                    </div>
                    {/* <TextareaAutosize className="Content" value={content.text} readOnly/> */}
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default About;