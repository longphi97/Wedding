import s21 from '../vaycuoi/bosuutap2/s21.jpg';
import s22 from '../vaycuoi/bosuutap2/s22.jpg';
import s23 from '../vaycuoi/bosuutap2/s23.jpg';
import s24 from '../vaycuoi/bosuutap2/s24.jpg';
import s25 from '../vaycuoi/bosuutap2/s25.jpg';
import s26 from '../vaycuoi/bosuutap2/s26.jpg';
import s27 from '../vaycuoi/bosuutap2/s27.jpg';
import s28 from '../vaycuoi/bosuutap2/s28.jpg';
import s29 from '../vaycuoi/bosuutap2/s29.jpg';
import s210 from '../vaycuoi/bosuutap2/s210.jpg';
import s211 from '../vaycuoi/bosuutap2/s211.jpg';
import s212 from '../vaycuoi/bosuutap2/s212.jpg';
import styledComponents from 'styled-components';

const s2s= [s21, s22, s23, s24, s25, s26, s27, s28, s29, s210, s211, s212];


function List2(props) {
    return (
        <Listitem>
            {
                    s2s.map((s2, index) => (
                        <div key={index} className='Items'>
                    <img src={s2} alt=""/>
                </div>
                    ))
                }
        </Listitem>
    )
}

export default List2;

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

