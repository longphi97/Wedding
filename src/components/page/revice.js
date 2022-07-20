import styledComponents from "styled-components";

function Revice(prop) {
    return (
        <Rev>
            <div className="container">
                <div className="row">

                        <div class="title">
                            <h1>Chính sách giao nhận hàng hóa</h1>
                        </div>
                        <p><strong>Kiểm tra váy cưới</strong></p>
                        <p> – Mily Bridal&nbsp;khuyến khích khách hàng kiểm tra tình trạng trang phục cưới / phụ kiện đi kèm khi trực tiếp đến cửa hàng nhận trang phục cưới. Bên cạnh đó, khách hàng phải ký xác nhận chi tiết khi nhận trang phục cưới và ghi rõ ngày, tháng, năm cũng như ký họ/tên xác nhận.<br/>
                            – Khách hàng có trách nhiệm gửi CMND/Bằng lái xe/ Giấy tờ tùy thân có hình ảnh khác của khách hàng mỗi khi lấy trang phục cưới hoặc gửi 01 số tiền tương đương với giá trị thuê váy như là số tiền thế chân.
                        </p>
                        <p><strong>Thời gian giữ trang phục thuê</strong></p>
                        <p> – Khách hàng được quyền giữ trang phục cưới tối đa 03 ngày ( Nếu ở trong nội thành các chi nhánh) và 04 ngày ( Nếu ở xa)&nbsp;kể từ ngày lấy đến ngày trả. Ví dụ: nếu khách hàng lấy ngày 22/01/2021 thì trễ nhất khách hàng phải trả vào 25/01/2021&nbsp;<br/>
                            – Trường hợp phát sinh thêm thời gian thuê, cô dâu vui lòng thông báo với Mily Bridal trong lúc chốt váy để được linh động hỗ trợ. Ngược lại, Mily Bridal sẽ tính phụ phí giữ trang phục cưới là 20% giá thuê trang phục/ngày, tối đa 1.000.000VND/váy /ngày.
                        </p>
                        <p><strong>Phương thức giao nhận</strong><br/>
                            – Khách hàng sẽ đến trực tiếp cửa hàng để nhận váy, cũng như trả váy.<br/>
                            – Đối với khách hàng ở các tỉnh thành khác muốn nhận và trả váy, khách hàng sẽ phải chịu chi phí vận chuyển.
                        </p>


                    </div>
            </div>
        </Rev>
    )
}
export default Revice;

export const Rev = styledComponents.div`
padding-top: 60px;

.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    .row {
        margin-right: 15px;
        margin-left: 15px;

        .title {
            width: 100%;
            text-align: center;
            margin-bottom: 30px;

            h1 {
                text-align: left;
                color: #e6be9f;
            }
        }
    }
}
    
`;