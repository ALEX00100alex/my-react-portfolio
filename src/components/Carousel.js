import React from 'react';

import Card from '../components/Card';

import solar from '../assets/images/Solar System.png';
import mypic from '../assets/images/my pic.png';
import bookworm from '../assets/images/random-book.jpg';
import fitness from '../assets/images/cardio.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Michael Alexander',
                    subTitle: 'Health Care Professional and Amateur Coder',
                    imgSrc: mypic,
                    link: 'https://github.com/ALEX00100alex',
                    selected: false
                },

                {
                    id: 1,
                    title: 'Solar System Navigator',
                    subTitle: 'Solar System Navigator using 3rd party APIs for planetary information',
                    imgSrc: solar,
                    link: 'https://github.com/sloanlacey/solar-system-navigator',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Book-Worm',
                    subTitle: 'Book Finder app using Express, MySQL and DB access.',
                    imgSrc: bookworm,
                    link: 'https://github.com/sloanlacey/book-worm',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Workout Tracker',
                    subTitle: 'Create and track daily workouts, using Mongo and Express.',
                    imgSrc: fitness,
                    link: 'https://github.com/ALEX00100alex/WorkoutTracker',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;