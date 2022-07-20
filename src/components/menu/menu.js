import {BsMessenger} from 'react-icons/bs';
import {SiZalo} from 'react-icons/si';
import styled from 'styled-components'  ;

function Menu(props) {
    return (
        <MenuPane>
            <div className='logo'>
                <a href='https://m.me/yeukhomai'><i class="fa-brands fa-facebook-messenger"></i></a>
            </div>
            <div className='logo1'>
                <a href='https://zalo.me'><SiZalo className='icon'/></a>
            </div>
        </MenuPane>
    )
}
export default Menu;

export const MenuPane = styled.div`
    position: fixed;
    left: 20px;
    top: 80%;
    width: 60px;
    padding: 4px 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    height: 100%;

    .logo{
        background-color: #337ab7;
        border-radius: 25px;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 5px;

     i {
        color: white;
        font-size: 40px;
        }
    }

    .logo1{
        background-color: #337ab7;
        border-radius: 25px;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
     a {
            color: white;
        svg {
            width: 30px;
            height: 30px;
            }
        }
    }
`;