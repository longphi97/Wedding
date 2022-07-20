import dau1 from '../img/dau1.jpg';
import dau2 from '../img/dau2.jpg';
import dau3 from '../img/dau3.jpg';
import dau4 from '../img/dau4.jpg';
import dau5 from '../img/dau5.jpg';
import dau6 from '../img/dau6.jpg';
import styled from 'styled-components';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import { useRef } from 'react';
import {SmoothHorizontalScrolling} from '../utiliti/index';

const daus = [dau1, dau2, dau3, dau4, dau5, dau6];

function Content(prop) {
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
        <RowContent>
            <h1 className='heading'>Cô Dâu MiLy Bridal</h1>
            <DauSlider ref={sliderRef}>
                {
                    daus.map((dau, index) => (
                        <div key={index} className='dauItems' ref={dauRef}>
                    <img src={dau} alt=""/>
                </div>
                    ))
                }
            </DauSlider>
            <div className='btnleft' onClick={handleScrollLeft}>
                <FiChevronLeft />
            </div>
            <div className='btnright' onClick={handleScrollRight}>
                <FiChevronRight />
            </div>
        </RowContent>
    )
}
export default Content;

export const RowContent = styled.div`
    background-color: rgba(241,232,225,0.6);
    padding: 20px 20x 0;
    position: relative;
    width: 100%;
    height: 100%;

    .heading {
        font-size: 24px;
        text-align: center; 
        margin:0;
        padding-top: 10px;

        @media only screen and (max-width: 700px){
            font-size: 20px;
        }

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

export const DauSlider = styled.div`

    display: grid;
    gap: 5px;
    grid-template-columns: repeat(${daus.length}, 250px);
    transition: all 0.3s linear;
    user-select: none;
    overflow-y: hidden;
    avorflow-x: auto;
    overflow: hidden;
    padding-top: 28px;
    padding-bottom: 28px;
    scroll-behavior: smooth;
    padding-left: 10px;
    padding-right: 10px; 
    
    @media only screen and (max-width: 700px){
        grid-template-columns: repeat(${daus.length}, 180px);
    }

    &:hover .dauItems{
        opacity: 0.5;
    }

    .dauItems {

        transform: scale(1);
        max-width: 250px;
        max-height: 350px;
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
            border-radius: 45px 0px 45px 0px;
        }
    }
`;


