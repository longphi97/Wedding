import React from "react";
import picture from "../img/8e46e25fe6cf299170de.jpg"
import styled from "styled-components";


function Intro(props) {
    return (
      <IntroProduct>
          <img src={picture} 
          alt="" 
          width="100%"
          height="100%"
          className="pictureintro"
          />
          <div className="infoIntro">
            <h1 className="headingIntro">MiLy Bridal Eyelash Make-Up Nail</h1>
          </div>
      </IntroProduct>
    );
  }

export default Intro;

export const IntroProduct = styled.div`
  position: relative;

  .pictureintro {
    top: 0;
    left: 0;
  }

  .infoIntro {
    position: absolute;
    top: 250px;
    left: 30px;

    @media screen and (max-width:800px) {
      top: 120px;
      left:25px;
    }

    @media screen and (max-width:600px) {
      top: 100px;
      left:15px;
    }

    .headingIntro {
      font-size: 40px;
      transition: all 0.3s ease;
      color: rgba(96,99,96,0.6);

      @media screen and (max-width:800px) {
        font-size: 30px;
      }

      @media screen and (max-width:600px) {
       font-size: 24px;
      }
    }
  }

`;
