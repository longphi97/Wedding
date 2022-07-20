import React from "react";
import styled from "styled-components";
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import { useRef } from 'react';
import {SmoothHorizontalScrolling} from '../utiliti/index';
import hand1 from '../img/hand1.jpg';
import hand2 from '../img/hand2.jpg';
import hand3 from '../img/hand3.jpg';
import hand4 from '../img/hand4.jpg';
import hand5 from '../img/hand5.jpg';
import hand6 from '../img/hand6.jpg';
import hand7 from '../img/hand7.jpg';
import hand8 from '../img/hand8.jpg';
import hand9 from '../img/hand9.jpg';
import hand10 from '../img/hand10.jpg';
import hand11 from '../img/hand11.jpg';
import hand12 from '../img/hand12.jpg';
import hand13 from '../img/hand13.jpg';
import hand14 from '../img/hand14.jpg';
import hand15 from '../img/hand15.jpg';
const hands = [hand1, hand2, hand3, hand4, hand5, hand6, hand7, hand8, hand9, hand10, hand11, hand12, hand13, hand14, hand15];

function Content3(props) {
    const sliderRef = useRef();
    const dauRef = useRef();

    const handleScrollRight = () => {
        const maxScrollLeft = sliderRef.current.scrollWidth - 
        sliderRef.current.clientWidth;
    
        if (sliderRef.current.scrollLeft < maxScrollLeft) {
            SmoothHorizontalScrolling(sliderRef.current,
            250,
            dauRef.current.clientWidth *2,
            sliderRef.current.scrollLeft)
        }
    }

    const handleScrollLeft = () => {
    
        if (sliderRef.current.scrollLeft >0 ){
            SmoothHorizontalScrolling(sliderRef.current,
            250,
            -dauRef.current.clientWidth *2,
            sliderRef.current.scrollLeft
            )
        }
    }
    return (
        <Contentss>
            <h1 className='heading'>Mily Bridal luôn cập nhật những mẫu nails mới, hiện đại, phong cách</h1>
            <NailSlider ref={sliderRef}>
                {
                    hands.map((hand, index) => (
                        <div key={index} className='dauItems' ref={dauRef}>
                    <img src={hand} alt=""/>
                </div>
                    ))
                }
            </NailSlider>
            <div className='btnleft' onClick={handleScrollLeft}>
                <FiChevronLeft />
            </div>
            <div className='btnright' onClick={handleScrollRight}>
                <FiChevronRight />
            </div>
        </Contentss>
    )
}
export default Content3;


export const Contentss = styled.div`
    background-color: rgba(241,232,225,0.6);
    position: relative;
    width: 100%;
    height: 100%;

    .heading {
        font-size: 20px;
        text-align: center; 
        margin:0;
        padding-top: 10px;
        color: #414143;
    }

    .btnleft {
        position: absolute;
        top: 50%;
        left: 30px;
        z-index: 20;
        transform-origin: center;
        cursor: pointer;
        font-size: 50px;

        @media only screen and (max-width: 700px){
            font-size: 40px;
            left: 20px;
        }
    }
    
    .btnright {
        position: absolute;
        top: 50%;
        right: 30px;
        z-index: 20;
        transform-origin: center;
        cursor: pointer;
        font-size: 50px;

        @media only screen and (max-width: 700px){
            font-size: 40px;
            right: 20px;
        }
    }

`;


export const NailSlider = styled.div`
    display: grid;
    gap: 4px;
    grid-template-columns: repeat(${hands.length}, 300px);
    transition: all 0.3s linear;
    user-select: none;
    overflow-y: hidden;
    avorflow-x: auto;
    overflow: hidden;
    padding-top: 18px;
    padding-bottom: 18px;

    @media only screen and (max-width: 700px){
        grid-template-columns: repeat(${hands.length}, 200px);
    }

    &:hover .dauItems{
        opacity: 0.5;
    }

    .dauItems {
        transform: scale(1);
        max-width: 300px;
        max-height: 250px;
        width: 100%;
        height: 100%;
        transition: all 0.3s linear;
        user-select: none;
        overflow: hidden;
        border-radius: 6px;
        transform: center left;
        position: relative;

        &:hover {
            opacity: 1;
            transform: scale(1.2);
            z-index: 10;
    }

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: 25px;
        }
    }


`;