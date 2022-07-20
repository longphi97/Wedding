import s41 from '../vaycuoi/bosuutap4/s41.jpg';
import s42 from '../vaycuoi/bosuutap4/s42.jpg';
import s43 from '../vaycuoi/bosuutap4/s43.jpg';
import s44 from '../vaycuoi/bosuutap4/s44.jpg';
import s45 from '../vaycuoi/bosuutap4/s45.jpg';
import s46 from '../vaycuoi/bosuutap4/s46.jpg';
import s47 from '../vaycuoi/bosuutap4/s47.jpg';
import s48 from '../vaycuoi/bosuutap4/s48.jpg';
import s49 from '../vaycuoi/bosuutap4/s49.jpg';
import s410 from '../vaycuoi/bosuutap4/s410.jpg';
import s411 from '../vaycuoi/bosuutap4/s411.jpg';
import s412 from '../vaycuoi/bosuutap4/s412.jpg';
import styledComponents from 'styled-components';

const s4s= [s41, s42, s43, s44, s45, s46, s47, s48, s49, s410, s411, s412];


function List4(props) {
    return (
        <Listitem>
            {
                    s4s.map((s4, index) => (
                        <div key={index} className='Items'>
                    <img src={s4} alt=""/>
                </div>
                    ))
                }
        </Listitem>
    )
}

export default List4;

export const Listitem=styledComponents.div`
                padding-top: 60px;
                padding-right: 15px;
                padding-left: 15px;
                margin-right: auto;
                margin-left: auto;
                display: flex;
                flex-wrap: wrap;
                gap: 5px;
                justify-content: space-around;

                .Items {
                    width: 30%;
                    float: left;
                    position: relative;
                    margin-bottom: 30px;
                    transform: scale(1);
                   

                    img {
                        width: 100%;
                        height: 100%;
                        border: 0;
                        vertical-align: center;
                    }

                    &:hover {
                        transform: scale(1.2);
                    }
                }


`;

