import styled from "styled-components";

function Booking(props) {
    return (
        <Book>
            <div className="title">
                <h2 className="datlich">ĐẶT LỊCH</h2>
                <p>Vui lòng đặt hẹn trước để chúng tôi có thể hỗ trợ bạn tốt nhất.</p>
            </div>
            <form className="booking">
                <fieldset className="input">
                    <div className="form">
                        <label className="labelinput">
                            Họ và tên
                        </label>
                        <input type="text" className="inputname" placeholder="Vui lòng nhập họ và tên của bạn."/>
                    </div>
                    <div className="form">
                        <label className="labelinput">
                        Công việc
                        </label>
                        <input type="text" className="inputname" placeholder="Makeup, thuê váy, thuê áo dài, nail, eyelash."/>
                    </div>
                    <div className="form">
                        <label className="labelinput">
                        Số điện thoại di động
                        </label>
                        <input type="text" className="inputname" placeholder="Số điện thoại di động."/>
                    </div>
                    <div className="form">
                        <label className="labelinput">
                        Ngày hẹn dự kiến
                        </label>
                        <input type="text" className="inputname" placeholder="DD/MM/YYYY"/>
                    </div>
                </fieldset>
                <button className="btn">ĐẶT LỊCH</button>
            </form>
    </Book>
    )
}
export default Booking;
export const Book=styled.div`
    margin: 0 auto;
    padding: 120px 0 60px;
    width: 420px;


    .title {
        text-align: center;

        .datlich {
            line-height: 47px;
            font-size: 40px;
            font-weight: 700;
            letter-spacing: 6px;
            color: #191919;
        }

        p {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            letter-spacing: 0;
            line-height: 25px;
            text-transform: none;
            margin-top: 20px;
            color: #8a8a8a;
        }
    }

    .booking .btn {
        appearance: none;
        display: inline-block;
        margin: 40px 0 20px;
        padding: 0 20px;
        font-size: 16px;
        height: 70px;
        line-height: 68px;
        text-align: center;
        outline: none;
        border: none;
        box-sizing: border-box;
        vertical-align: middle;
        width: 100%;
        letter-spacing: .5px;
        color: #fff;
        background-color: #b48360;
        border: 1px solid #b48360;
        cursor: pointer;

        &:hover {
            background-color:#fff;
            color: #b48360;
        }
    }

    .booking .input .form{
        margin-top: 32px;
        display: flex;
        flex-direction: column;

        .labelinput{
            display: inline-block;
            margin-bottom: 12px;
            font-size: 12px;
            color: #737373;
            font-weight: normal;
        }

        .inputname {
            -webkit-appearance: none;
            padding: 13px 16px 14px;
            color: #191919;
            line-height: 19px;
            font-size: 14px;
            outline: none;
            border: 1px solid #eaeaea;
            box-sizing: border-box;
            border-radius: 0;
            width: 100%;
        }

    }
`;
