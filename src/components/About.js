import React from 'react';
import Navbar from './Navbar';

import Container from '@mui/material/Container';

function About() {
    return (
        <div>
            <Navbar/>
           <div>
           <Container maxWidth="sm">
                <h1  style={{ color: '#cb314c', fontFamily: 'math', textAlign:'center'}}>About the food</h1>
           <p>&nbsp;&nbsp;&nbsp;&nbsp;It is similarities rather than differences that impart the Maharashtrian
                cuisine a distinct flavour of its own. In Marathi culture, food is considered
                equivalent to God – “anna he poornabrahma.” A typical Maharashtrian Phodni or
                tempering (using ghee and select spices) is bound to tantalize the olfactory
                senses of a Marathi Manus irrespective of regional affiliation. Food, in this
                culinary culture, is mostly sautéed, stir-fried or slow-cooked under pressure.
                Fish is shallow-fried and meats stewed until succulent. Vaafavne or steaming
                is a technique used frequently before items are fried. Cereals such as jowar
                and bajra, and pulses like toor and Bengal gram are the staples throughout the
                state, except for the coastal areas where rice is more prevalent. Another
                defining characteristic of Maharashtrian cuisine is a distinct sweet and
                sour flavour. Traditionally, jaggery or puran is the favoured sweetener,
                although sugar is used in equal measure nowadays. A tropical fruit called
                kokum is used as a souring agent (primarily in the coastal regions) for
                dishes and imparts a unique pink or purple colour to the food. Another
                commonly used souring agent is tamarind. A ubiquitous ingredient is coconut,
                used either in fresh or dried/ powdered form. Peanuts too are added to a
                wide variety of dishes and form the base for various delectable chutneys.
                Peanut oil is also used for cooking in the region. The traditional way of
                setting a platter is known as Taat Vadhany in which all the dishes and
                accompaniments of a thali (platter) are arranged in a particular order.
                While salt is placed at the top-centre of the Taat (plate), the dessert
                occupies the left side of the base. To the left of the salt are served
                accompaniments to the main meal such as a lemon wedge, chatni, salad
                etc., and to its right are served the vegetables and the main course
                or curry, followed by papad and bhakris. Rice is always served in an
                evenly shaped mound, garnished with ghee.</p>
                </Container>
           </div>
           <footer style={{textAlign:'end' , color:'#808080'}}>@Sanket Parashram Tulsankar<br/>*Terms and conditions</footer>
        </div>
    );
}

export default About;