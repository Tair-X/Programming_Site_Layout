import React from 'react';
import {Carousel} from "react-bootstrap";
import s from "../images/song.jpg"
import s1 from "../images/song1.jpg"
import s2 from "../images/song2.jpg"

const CarouselBox = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" style={{height:600}} src={s} alt=""/>
                <Carousel.Caption>
                    <h3>Design</h3>
                    <p>A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" style={{height:600}} src={s2} alt=""/>
                <Carousel.Caption>
                    <h3>Team</h3>
                    <p>A team is a group of individuals, all working together for a common purpose. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" style={{height:600}} src={s1} alt=""/>
                <Carousel.Caption>
                    <h3>Technik</h3>
                    <p>Definitions for Technik Tech·nik. Here are all the possible meanings and translations of the word Technik.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselBox;