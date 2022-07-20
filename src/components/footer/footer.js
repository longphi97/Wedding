import {GoLocation} from 'react-icons/go';
import {AiOutlinePhone} from 'react-icons/ai';
import {GiEarthAfricaEurope} from 'react-icons/gi';
import styled from 'styled-components';
function Footer(props) {
    return (
        <Footerss>
            <div className="container">
                <div className="row">
                    <div className="column1">
                        <h2 className="row1">Liên hệ</h2>
                        <p>
                            <GoLocation />
                            Địa điểm: Ngã Tư Đại Hào, Triệu Đại, Triệu Phong, Quảng Trị    
                        </p>
                        <p>
                            <AiOutlinePhone />
                            0898580567
                        </p>
                        <p>
                            <GiEarthAfricaEurope />
                            <a>milybridal.com.vn</a>
                        </p>
                    </div>
                    <div className='column2'>
                        <h3 className='row2'>CHÍNH SÁCH</h3>
                        <ul className='menufooter'>
                            <li>
                                <a href='/quydinhvahinhthucthanhtoan'>Quy định và hình thức thanh toán</a>
                            </li>
                            <li>
                                <a href='/chinhsachbaomatthongtin'>Chính sách bảo mật thông tin</a>
                            </li>
                            <li>
                                <a href='/chinhsachgiaonhanhanghoa'>Chính sách giao nhận hàng hoá</a>
                            </li>
                        </ul>
                    </div>
                    <div className='column3'>
                        <h3 className='row3'>FANPAGE FACEBOOK</h3>
                        <a href='https://www.facebook.com/yeukhomai'>https://www.facebook.com/yeukhomai</a>
                    </div>
                </div>
            </div>
        </Footerss>
    )
}

export default Footer;

export const Footerss = styled.div`
    width: 100%;
    overflow: hidden;
    background-color: #c09170;
    padding-top: 50px;
    padding-bottom: 20px;
    color: white;

    .container {

        .row{
            display:flex;
            
            @media screen and (max-width: 600px) {
                flex-wrap: wrap;
            }

            .column1 {
                padding-left: 20px;
                width:100%;
                
                .row1 {
                    font-size: 18px;
                    text-transform: uppercase;
                    color: #fff;
                    margin-bottom: 20px;
                    padding-top: 10px;
                    font-weight: 600;
                    position: relative;
                }
            }

            .column2 {
                width:100%;
                margin-left: 20px;

                ul{
                    list-style: none;
                    padding: 0;

                    li {
                        margin: 10px 0;
                    }
                    li a{
                        text-decoration: none;
                        color: white;
                    
                    }
                }
            }

            .column3 {
                width:100%;
                padding-left: 20px;
                
                 a{
                    text-decoration: none;
                    color: white;
                }
            }
        }
    }
`;