import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content >
            <p>I am an innovative full stack software developer offering experience in the entire 
            software lifecycle. I have been trained in advanced development methodologies, tools and 
            processes. I pride myself in being able to analyze code and engineer well-researched, cost-effective and responsive solutions.</p>

            <p>My technical toolkit includes JavaScript, SQL, MongoDB, React, JQuery, CSS and HTML</p>

            <p>I'm constantly learning new things. Currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS.</p>

            <p>I have an extensive background in health care and
            retail operations, strategic product development, big data analytics and using cutting-edge
            technology
            to transform the customer experience. Possessing strong communication and presentation skills, I
            am a
            passionate, self-motivated and hands-on leader whose greatest attribute is the ability to develop
            and
            motivate high performing teams. I am currently working in the Commercial Business Products department of Regence Blue Cross Blue
            Shield of Oregon.</p>

            <p>You can find my resume here:<a href="./M Alexander resume.pdf"> DOWNLOAD MY RESUME </a></p>
            </Content>
        </div>
    );

}

export default AboutPage;