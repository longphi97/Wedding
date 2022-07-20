import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useScrollY } from '../hooks';
import logoo from '../assets/images/logooo.png';
import {GiHamburgerMenu} from 'react-icons/gi'

function Navbar(props) {
   const [scrollY]=useScrollY();
    const [hide, sethide] = useState(true);
   const handleClick = () => {
        sethide(!hide);
   }
    return (
        <Selector style={scrollY <50 ? {backgroundColor: 'transparent'}:{backgroundColor: 'rgba(241,232,225,0.6)'}}>
            <div className='container'>
                <div className='logo'>
                    <img src={logoo} alt='' />
                </div>
                <div className='menutop'>
                 <ul className='navmenu'>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/weddingdress'>Wedding Dress</a>
                        </li>
                        <li>
                            <a href='/showroom'>Ao Dai</a>
                        </li>
                        <li>
                            <a href='/nailproduct'>Nail Products</a>
                        </li>
                        <li>
                            <a href='/contact'>Contact</a>
                        </li>
                    </ul>
                    </div>
                {!hide && <div className='menutop2'>
                <ul className='navmenu2'>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/weddingdress'>Wedding Dress</a>
                    </li>
                    <li>
                        <a href='/showroom'>Ao Dai</a>
                    </li>
                    <li>
                        <a href='/nailproduct'>Nail Products</a>
                    </li>
                    <li>
                        <a href='/contact'>Contact</a>
                    </li>
                </ul>
                </div>}

                
                
                <button className='btn' onClick={handleClick}>
                    <i className='fafa' aria-hidden="true">
                        <GiHamburgerMenu />
                    </i>
                </button>   
            </div>
        </Selector>
    )
}
export default Navbar;

export const Selector = styled.div`
    width: 100%;
    z-index: 999;
    background-color: transparent;
    transition: 0.5s all ease;
    position: fixed;
    height: 70px;
    top: 0;
   
    


    .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        display: flex;
        flex-direction: row;

        @media only screen and (max-width: 700px){
            display: flex;
            justify-content: space-between;

            .btn {
                margin-left: 70%x;
            }
        }

        @media only screen and (max-width: 700px){
            .menutop{
                display: none;
            }
        }
        
        @media only screen and (min-width: 700px){
            .btn {
                display: none;
            }
        }
        @media only screen and (min-width: 700px){
            .menutop2 {
                display: none;
            }
        }


      


        .btn {
        float: right;
        margin-top: 22px;
        margin-bottom: 5px;
        color: #fff;
        background-color: #e6be9f;
        border: initial;
        padding: 5px 15px;
        cursor: pointer;

            .fafa {
                display: inline-block;
                font: normal normal normal 14px/1 FontAwesome;
                font-size: inherit;
                text-rendering: auto;
                -webkit-font-smoothing: antialiased;
            }
        }

        .logo {
            display: block;
            height: 60px;
            width: 60px;
            float: left;
            cursor: pointer;

            img {
                height: 50px;
                margin-top:10px;
                margin-bottom: 5px;
                vertical-align: middle;
                transition: 0.3s all ease;
                border: 0;
                }

            }
        }

        .menutop {
            text-align: center;
            float: left;
            width: 100%;
            

            .navmenu{
                margin:0;
                height: 70px;
                width: 100%;
                display: flex;
                padding: 0;
                flex-direction: row;

                li {
                    display: inline-block;
                    list-style: none;
                    text-transform: uppercase;
                    

                    a {
                        line-height: 65px;
                        color: #333;
                        padding-left: 10px;
                        padding-right: 10px;
                        display: block;
                        font-size: 15px;
                        display: block;
                        transition: 0.5s all ease;   
                        height: 70px;
                        text-decoration:none;
                        
                        &:hover {
                        background-color: #e6be9f;
                        color:#fff;
                        }
                    }
                }

                
            }
     
        }

        .menutop2 {
            text-align: center;
            width: 100%;
            

            .navmenu2{
                margin:0;
                height: 50px;
                width: 100%;
                display: flex;
                flex-direction: column;
                padding: 0px;

                li {
                    display: inline-block;
                    list-style: none;
                    background-color:rgba(241,232,225,0.6);
                    text-transform: uppercase;

                    a {
                        line-height: 50px;
                        color: #333;
                        padding-left: 10px;
                        padding-right: 10px;
                        display: block;
                        font-size: 15px;
                        display: block;
                        transition: 0.5s all ease;   
                        height: 30px;
                        text-decoration:none;
                        text-align: center;
                        padding-bottom: 10px;
                        
                        &:hover {
                        background-color: #e6be9f;
                        color:#fff;
                        }
                    }
                }

                
            }
     
        }
    }

`;
