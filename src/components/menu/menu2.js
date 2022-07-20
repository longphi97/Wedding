import {BsFillCalendarCheckFill} from 'react-icons/bs';
import styled from 'styled-components'  ;

function Menu2(props) {
    return (
        <MenuPane>
            <div className='logo1'>
                <a href='/booking'><BsFillCalendarCheckFill className='icon'/>Đặt Lịch Hẹn</a>
            </div>
        </MenuPane>
    )
}
export default Menu2;

export const MenuPane = styled.div`
position: fixed;
bottom: 10px;
right: 10px;
background-color: #ff8814;
box-shadow: 0px 0px 5px #777;
z-index: 99999;
border-radius: 10px;
height: 50px;
width: 150px;
text-align: center;
justify-content: center;


    .logo1{
        padding-top: 13px;
     a {
            color: white;
            font-size: 18px;
            text-decoration:none;
            
        }   
           
        svg {
            width: 15px;
            height: 15px;
            padding: 2px;
            }
        }
    }
`;