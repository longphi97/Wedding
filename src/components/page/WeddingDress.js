import bosuutap1 from '../vaycuoi/bosuutap1.jpg';
import bosuutap2 from '../vaycuoi/bosuutap2.jpg';
import bosuutap3 from '../vaycuoi/bosuutap3.jpg';
import bosuutap4 from '../vaycuoi/bosuutap4.jpg';
import anhnen from '../vaycuoi/anhnen.jpg';
import styledComponents from 'styled-components';

function WeddingDress(props) {
    return (
        <Dress>
            <div className="anhnenintro">
                <img src={anhnen} 
                    alt="" 
                    width="100%"
                    height="100%"
                />
            </div>
            <div className='detail'>
                <div className='title'>
                    <h2>Bộ sưu tập Váy cưới</h2>
                </div>
            </div>
            <div className='banner'>
                <div className='row'>
                    <div className='column'>
                        <img src={bosuutap1} alt='' />
                        <div className="boder">

                                <div className="description">

                                    <div className="content">

                                        <h2>Bộ sưu tập TWINKLE TWINKLE STAR</h2>

                                        <span></span>

                                        <a href="/bosuutap1">Xem thêm</a>

                                    </div>

                                </div>

                        </div>
                    </div>
                    <div className='column'>
                        <img src={bosuutap2} alt='' />
                        <div className="boder">

                                <div className="description">

                                    <div className="content">

                                        <h2>Bộ sưu tập Fairy Dream</h2>

                                        <span></span>

                                        <a href="/bosuutap2">Xem thêm</a>

                                    </div>

                                </div>

                        </div>
                    </div>
                    <div className='column'>
                        <img src={bosuutap3} alt='' />
                        <div className="boder">

                                <div className="description">

                                    <div className="content">

                                        <h2>MILY BRIDAL ON PARIS</h2>

                                        <span></span>

                                        <a href="/bosuutap3">Xem thêm</a>

                                    </div>

                                </div>

                        </div>
                    </div>
                    <div className='column'>
                        <img src={bosuutap4} alt='' />
                        <div className="boder">

                                <div className="description">

                                    <div className="content">

                                        <h2>Bộ sưu tập Hidden Charm</h2>

                                        <span></span>

                                        <a href="/bosuutap4">Xem thêm</a>

                                    </div>

                                </div>

                        </div>
                    </div>

                </div>
            </div>
        </Dress>
    )
}

export default WeddingDress;

export const Dress = styledComponents.div`

        .detail {
            width: 100%;
            padding-top: 30px;
            adding-bottom: 1px;

            .title {
                width: 100%;
                text-align: center;
                margin-bottom: 30px;

                h2 {
                    color: #e6be9f;
                    font-size: 40px;
                }
            }
        }
           
        .banner {

            .row {
                padding-right: 15px;
                padding-left: 15px;
                margin-right: auto;
                margin-left: auto;
                display: flex;
                flex-wrap: wrap;
                gap: 5px;
                justify-content: space-around;

                .column {
                    width: 30%;
                    float: left;
                    position: relative;
                    margin-bottom: 30px;
                   

                    img {
                        width: 100%;
                        height: 220px;
                        border: 0;
                        vertical-align: center;
                    }
                    

                    .boder {
                        padding-top: 20px;

                        .description {
                            width: 100%;
                            height: 100%;
                            display: table;
                            border: 1px solid #fff;
                            text-align: center;

                            .content {
                                display: table-cell;
                                vertical-align: middle;
                                position: relative;
                                z-index: 210;
                            
                                h2 {
                                    font-weight: 600;
                                    color: #333;
                                    margin-bottom: 25px;
                                    font-size: 20px;
                                    overflow: hidden;
                                    display: -webkit-box;
                                    -webkit-line-clamp: 1;
                                    -webkit-box-orient: vertical;
                                }
                                a {
                                    border-color: #333333;
                                    background-color: #333333;
                                    height: 38px;
                                    line-height: 38px;
                                    font-size: 12px;
                                    padding: 0 24px;
                                    display: inline-block;
                                    color: #fff;
                                    text-transform: uppercase;
                                    font-weight: 600;
                                    margin-top: 15px;
                                    text-decoration: none;
                                }
                            }
                        }
                    }
                }
            }
        }

`;

