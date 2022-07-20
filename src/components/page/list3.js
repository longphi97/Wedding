import s31 from '../vaycuoi/bosuutap3/s31.jpg';
import s32 from '../vaycuoi/bosuutap3/s32.jpg';
import s33 from '../vaycuoi/bosuutap3/s33.jpg';
import s34 from '../vaycuoi/bosuutap3/s34.jpg';
import s35 from '../vaycuoi/bosuutap3/s35.jpg';
import s36 from '../vaycuoi/bosuutap3/s36.jpg';
import s37 from '../vaycuoi/bosuutap3/s37.jpg';
import s38 from '../vaycuoi/bosuutap3/s38.jpg';
import s39 from '../vaycuoi/bosuutap3/s39.jpg';
import s310 from '../vaycuoi/bosuutap3/s310.jpg';
import s311 from '../vaycuoi/bosuutap3/s311.jpg';
import s312 from '../vaycuoi/bosuutap3/s312.jpg';
import styledComponents from 'styled-components';

const s3s= [s31, s32, s33, s34, s35, s36, s37, s38, s39, s310, s311, s312];


function List3(props) {
    return (
        <Listitem>
            {
                    s3s.map((s3, index) => (
                        <div key={index} className='Items'>
                    <img src={s3} alt=""/>
                </div>
                    ))
                }
        </Listitem>
    )
}

export default List3;

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

