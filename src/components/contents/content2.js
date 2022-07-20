import React from "react";
import styled from "styled-components";
import nail1 from "../img/nail1.jpg"
import nail2 from "../img/nail2.jpg"
import nail3 from "../img/nail3.jpg"

const nails = [nail1, nail2, nail3];

function Content2(props) {
    return (
        <Contentss>
            <h1 className='heading'>Color Nails</h1>
            <NailSlider>
                {
                    nails.map((nail, index) => (
                        <div key={index} className='dauItems'>
                    <img src={nail} alt=""/>
                </div>
                    ))
                }
            </NailSlider>
        </Contentss>
    )
}
export default Content2;


export const Contentss = styled.div`
    background-color: rgba(241,232,225,0.6);
    padding-top: 60px;
    position: relative;
    width: 100%;
    height: 100%;

    .heading {
        font-size: 24px;
        text-align: center; 
        margin:0;
        padding-top: 10px;
        color: #414143;
}


`;


export const NailSlider = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 4px;
    grid-template-columns: repeat(${nails.length}, 450px);
    transition: all 0.3s linear;
    user-select: none;
    overflow-y: hidden;
    avorflow-x: auto;
    overflow: hidden;
    padding: 18px;

    &:hover .dauItems{
        opacity: 0.5;
    }

    .dauItems {
        transform: scale(1);
        max-width: 420px;
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
        }
    }


`;