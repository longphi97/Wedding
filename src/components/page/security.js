import styledComponents from "styled-components";

function Security(prop) {
    return (
        <Securi>
              <div className="container">
                <div className="row">

                        <div class="title">
                            <h1>Chính sách bảo mật thông tin</h1>
                        </div>
                        <h2>1/ Mục đích và phạm vi thu thập thông tin</h2>
                        <p>Mily Bridal hiện tại chưa cung cấp dịch vụ đặt hàng trực tuyến. Việc thu thập dữ liệu chủ yếu là thông qua các trang Mạng xã hội, Website chính thức của Mily Bridal và tại cửa hàng bao gồm: Email/ Số điện thoại/ Tên đăng nhập, Mật khẩu đăng nhập, Địa chỉ. Đây là các thông tin bắt buộc để có thể sử dụng dịch vụ tại Mily Bridal. Mục đích nhằm liên hệ xác nhận dịch vụ, chăm sóc hợp đồng và cập nhật các thông tin khác để đảm bảo quyền lợi cho khách hàng.</p>
                        <p>Khách hàng chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động trong quá trình sử dụng dịch vụ dưới tên đăng kí, mật khẩu và hộp thư điện tử của mình. Ngoài ra, khách hàng có trách nhiệm thông báo kịp thời cho Mily Bridal thông qua điện thoại, website, mạng xã hội… về những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ thông tin cá nhân của bên thứ ba để có biện pháp giải quyết phù hợp.</p>
                        <h2>2/ Phạm vi sử dụng thông tin</h2>
                        <p>Mily Bridal và Website sử dụng thông tin khách hàng cung cấp để:</p>
                        <p>– Cung cấp các dịch vụ đến khách hàng</p>
                        <p>– Gửi thông báo về các hoạt động trao đổi thông tin giữa khách hàng và Mily Bridal</p>
                        <p>– Ngăn ngừa các hoạt động phá hủy tài khoản người dùng của khách hàng hoặc các hoạt động giả mạo khách hàng</p>
                        <p>– Liên lạc và giải quyết với khách hàng trong những trường hợp đặc biệt</p>
                        <p>– Không sử dụng thông tin cá nhân của khách hàng ngoài mục đích xác nhận và liên hệ có liên quan đến giao dịch tại Mily Bridal.</p>
                        <p>– Trong trường hợp có yêu cầu của pháp luật: Mily Bridal có trách nhiệm hợp tác cung cấp thông tin khách hàng khi có yêu cầu từ cơ quan Tư pháp bao gồm: Viện kiểm sát, Tòa án, Cơ quan công an điều tra liên quan đến hành vi vi phạm pháp luật. Ngoài ra, không có bất kỳ cơ quan hay cá nhân có quyền xâm phạm vào thông tin cá nhân của khách hàng.</p>
                        <h2>3/ Thời gian lưu trữ thông tin</h2>
                        <p>Dữ liệu cá nhân của khách hàng sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ. Còn lại trong mọi trường hợp, thông tin cá nhân thành viên sẽ được bảo mật trên máy chủ của Mily Bridal.</p>
                        <p>Địa chỉ của đơn vụ thu thập và quản lý thông tin cá nhân</p>
                        <p>Mily Bridal Viet Nam</p>
                        <p>Trụ sở chính: Ngã tư, Đại Hào, Triệu Đại, Triệu Phong, Quảng Trị</p>
                        <p>Email: milybridal.vn@gmail.com</p>
                        <h2>4/ Cam kết bảo mật thông tin cá nhân Khách hàng</h2>
                        <p>Thông tin cá nhân khách hàng của Mily Bridal được cam kết bảo mật tuyệt đối theo chính sách về thông tin cá nhân của Mily Bridal. Việc thu thập và sử dụng thông tin của mỗi khách hàng chỉ được thực hiện khi có sự đồng ý của khách hàng đó, trừ những trường hợp pháp luật có quy định khác. Mily Bridal cam kết:</p>
                        <p>• Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên thứ ba về thông tin cá nhân của khách hàng khi không có sự cho phép hoặc đồng ý, trừ những trường hợp pháp luật có quy định khác.</p>
                        <p>• Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu cá nhân khách hàng, Mily Bridal sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử lý kịp thời và thông báo cho Khách hàng được biết.</p>
                    </div>
            </div>
        </Securi>
    )
}
export default Security;

export const Securi = styledComponents.div`

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