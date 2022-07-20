import styledComponents from "styled-components";

function Ruler(prop) {
    return (
        <Rulers>
            <div className="container">
                <div className="row">

                        <div class="title">
                            <h1>Quy định và hình thức thanh toán</h1>
                        </div>
                        <p><strong>Tiến độ thanh toán</strong></p>
                        <p><strong><em>Lần 1</em></strong>: Khách hàng đặt cọc trước 50% tổng giá trị hợp đồng để đảm bảo thực hiện dịch vụ thuê váy</p>
                        <p><strong><em>Lần 2</em></strong>: Khi nhận váy</p>
                        <p>Khách hàng thanh toán 100% tổng giá trị hợp đồng</p>
                        <p><strong><em><u>Đặt cọc: </u></em></strong></p>
                        <p>+ Đối với dịch vụ thuê áo dài: Đặt cọc 1.000.000đ kèm giấy tờ tùy thân bắt buộc</p>
                        <p>+ Đối với dịch vụ thuê váy cưới (giá thuê lẻ từ 4.000.000đ – 10.000.000đ): Đặt cọc 3.000.000đ kèm giấy tờ tùy thân bắt buộc</p>
                        <p>+ Đối với dịch vụ thuê váy cưới (giá thuê lẻ từ 10.000.000đ trở lên): Đặt cọc 5.000.000đ kèm giấy tờ tùy thân bắt buộc</p>
                        <p><em>*Trường hợp khách hàng thuê từ 2 trang phục trở lên, số tiền đặt cọc sẽ tương ứng với số lượng trang phục. </em></p>
                        <p>Khi váy được hoàn trả nguyên vẹn không bị rách, hỏng, cháy, phai màu,… Bella Bridal sẽ hoàn trả khách hàng toàn bộ tiền cọc và giấy tờ tùy thân đi kèm.</p>
                        <p><strong><u>Lưu ý:</u></strong> Khách hàng vui lòng giữ váy cẩn thận tránh xa pháo điện, tàn thuốc lá, rượu vang và hoàn trả đầy đủ các phụ kiện kèm theo váy: voan, găng tay, tùng váy, độn mút, dây đan. Nếu trường hợp váy bị hỏng rách quý khách vui lòng bồi thường 70% giá trị váy.</p>
                        <p><strong>Phương thức thanh toán</strong></p>
                        <p> – Tiền mặt<br/>
                            – Chuyển khoản ngân hàng<br/>
                            – Thẻ ATM/Visa/Master
                        </p>

                    </div>
            </div>
        </Rulers>
    )
}
export default Ruler;

export const Rulers= styledComponents.div`

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
