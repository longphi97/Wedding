import ReactPlayer from "react-player";
import styledComponents from "styled-components";
import aodai1 from '../img/aodai1.jpg';
import aodai2 from '../img/aodai2.jpg';
import aodai3 from '../img/aodai3.jpg';
import aodai4 from '../img/aodai4.jpg';

const aodais = [{name: aodai1,
                price: '300.000VND'
                },
                {
                name: aodai2,
                price: "320.00VND"
                },
                { name: aodai3,
                price: "330.00VND"
                },
                {name: aodai4,
                price: "340.00VND"
                }
]

function ShowRoom(props) {
    return (
        <Show>
            <ReactPlayer
            playing={true}
            height="500px"
            loop={true}
            width= "100%"
            volume={1}
            url="https://youtu.be/69Mx2mhQSf0"
            className='introvideo'
            />
        <div className="title">
            <h1>Những mẫu áo dài đẹp năm 2022</h1>
        </div>
        <div className="aodaigrid">
            {
                aodais.map((aodai, index) => (
                    <div key={index} className='aodaiItems'>
                        <img src={aodai.name} alt=""/>
                        <div className="aodaiprice">Giá: {aodai.price}</div>
                    </div>
                ))
            }
        </div>
        </Show>
        
    )
}
export default ShowRoom;

export const Show = styledComponents.div`

    position: relative;
    width: 100%;
    height: 100%;


    .introvideo {
        position: relative;
        top: 0;
        left: 0;
    }

    .title {
        width: 100%;
        margin-top: 10px;

        h1 {
            text-align: center;
            color: #e6be9f;
            font-size: 50px;
        }

        @media only screen and (max-width:700px){
            h1 {font-size: 30px;}
        }
    }
    }

    .aodaigrid {
        display: flex;
        gap: 10px;
        align-content: stretch;
        transition: all 0.3s linear;
        padding: 28px 10px;
        

        .aodaiItems {
            transform: scale(1);
            position: relative;
            border: inset;

            &:hover {
                transform: scale(1.1);
            }

            img {
                height: 100%;
                width: 100%;
                text-align: center;
            }

            .aodaiprice {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                text-align: center;
                font-size: 24px;
                color: white;
                background-color: rgba(0,0,0,0.5);

                @media only screen and (max-width:700px){
                    font-size: 15px;
                }
            }

        }
    }
`;
