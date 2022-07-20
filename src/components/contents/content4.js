import React from "react";
import styled from "styled-components";
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import { useRef } from 'react';
import {SmoothHorizontalScrolling} from '../utiliti/index';
import foot1 from '../img/foot1.jpg';
import foot2 from '../img/foot2.jpg';
import foot3 from '../img/foot3.jpg';
import foot4 from '../img/foot4.jpg';
import foot5 from '../img/foot5.jpg';
import foot6 from '../img/foot6.jpg';
import foot7 from '../img/foot7.jpg';
import foot8 from '../img/foot8.jpg';
import foot9 from '../img/foot9.jpg';
import foot10 from '../img/foot10.jpg';
import foot11 from '../img/foot11.jpg';
import foot12 from '../img/foot12.jpg';
import foot13 from '../img/foot13.jpg';
import foot14 from '../img/foot14.jpg';
import foot15 from '../img/foot15.jpg';
const foots = [foot1, foot2, foot3, foot4, foot5, foot6, foot7, foot8, foot9, foot10, foot11, foot12, foot13, foot14, foot15];
function Content4(props) {
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
            <NailSlider ref={sliderRef}>
                {
                    foots.map((foot, index) => (
                        <div key={index} className='dauItems' ref={dauRef}>
                    <img src={foot} alt=""/>
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
export default Content4;


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
    grid-template-columns: repeat(${foots.length}, 300px);
    transition: all 0.3s linear;
    user-select: none;
    overflow-y: hidden;
    avorflow-x: auto;
    overflow: hidden;
    padding-top: 18px;
    padding-bottom: 18px;

    @media only screen and (max-width: 700px){
        grid-template-columns: repeat(${foots.length}, 200px);
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