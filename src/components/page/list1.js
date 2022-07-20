import s11 from '../vaycuoi/bosuutap1/s11.jpg';
import s12 from '../vaycuoi/bosuutap1/s12.jpg';
import s13 from '../vaycuoi/bosuutap1/s13.jpg';
import s14 from '../vaycuoi/bosuutap1/s14.jpg';
import s15 from '../vaycuoi/bosuutap1/s15.jpg';
import s16 from '../vaycuoi/bosuutap1/s16.jpg';
import s17 from '../vaycuoi/bosuutap1/s17.jpg';
import s18 from '../vaycuoi/bosuutap1/s18.jpg';
import s19 from '../vaycuoi/bosuutap1/s19.jpg';
import s110 from '../vaycuoi/bosuutap1/s110.jpg';
import s111 from '../vaycuoi/bosuutap1/s111.jpg';
import s112 from '../vaycuoi/bosuutap1/s112.jpg';
import styledComponents from 'styled-components';

const S1s= [s11, s12, s13, s14, s15, s16, s17, s18, s19, s110, s111, s112];


function List1(props) {
    return (
        <Listitem>
            {
                    S1s.map((s1, index) => (
                        <div key={index} className='Items'>
                    <img src={s1} alt=""/>
                </div>
                    ))
                }
        </Listitem>
    )
}

export default List1;

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

