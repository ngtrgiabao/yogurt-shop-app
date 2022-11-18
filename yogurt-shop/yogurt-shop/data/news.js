const newsList = [
    {
        id: "news1",
        title: "TẬP ĐOÀN TH RA MẮT SỮA CHUA TÁO – SƠ RI TỰ NHIÊN 100 G",
        desc: "Tiếp nối thực hiện sứ mệnh chăm sóc sức khỏe và góp phần xây dựng Tầm Vóc Việt, Tập đoàn TH mở lối tiên phong giới thiệu dòng sản phẩm sữa chua TH true YOGURT Táo – Sơ Ri Tự Nhiên 100 g được làm hoàn toàn từ sữa tươi sạch nguyên chất, lên men tự nhiên kết hợp với các nguyên liệu tự nhiên như: táo – sơ ri, việt quất, nha đam… Các sản phẩm TH true YOGURT[…]",
        photo: "https://www.thmilk.vn/wp-content/uploads/2022/09/Thumbnail-464x297.jpg",
    },
    {
        id: "news2",
        title: "TẬP ĐOÀN TH RA MẮT SỮA CHUA XOÀI – XOÀI TỰ NHIÊN 100 G",
        desc: " Xoài là một trong những cây ăn trái chủ lực của đồng bằng sông Cửu Long (ĐBSCL), chiếm khoảng 48% tổng diện tích xoài cả nước. Trong đó, tỉnh Đồng Tháp hiện có diện tích trồng xoài khoảng 12.171ha - lớn nhất vùng ĐBSCL với sản lượng hàng năm gần 124 ngàn tấn",
        photo: "./assests/images/news/news1.jpg",
    },
    {
        id: "news3",
        title: "TẬP ĐOÀN TH RA MẮT SỮA CHUA KIWI – SƠ RI TỰ NHIÊN 100 G",
        desc: "Kiwi thành phần dinh dưỡng rất cao so với các loại hoa quả khác. Hàm lượng vitamin C cao cho hệ miễn dịch khỏe mạnh cùng nguồn chất xơ hỗ trợ hệ tiêu hóa. Siêu quả Kiwi cho cả nhà siêu khỏe, 100% Vitamin C cần thiết mỗi ngày",
        photo: "./assests/images/news/news3.jpg",
    },
    {
        id: "news4",
        title: "TẬP ĐOÀN TH RA MẮT ỨNG DỤNG MỚI",
        desc: "Nhằm đáp ứng nhu cầu thị trường tự động hóa, chúng tôi đã cho ra mắt ứng dụng đặt hàng online nhằm giúp cho khách hàng tiết kiệm được khoảng thời gian khi di chuyển từ nơi này sang nơi khác.",
        photo: "./assests/images/news/news4.jpg",
    },
    {
        id: "news4",
        title: "TẬP ĐOÀN TH ĐẠT ĐƯỢC THÀNH TỰU MỚI",
        desc: "Năm 2022 vừa qua chúng tôi hân hạnh đạt được giải sữa chua ngon nhất năm trong nước, không ngừng nỗ lực và cải tiến, chúng tôi rất cảm ơn những quý khách hàng đã không ngừng ủng hộ chúng tôi.",
        photo: "./assests/images/news/news5.jpg",
    },
    {
        id: "news5",
        title: "ĐỊNH HƯỚNG CỦA TẬP ĐOÀN TH",
        desc: "Nhằm cải thiện dịch vụ để phục vụ tốt nhất cho khách hàng, chúng tôi đã và đang không ngừng cố gắng mang đến trải nghiệm tốt nhất cho khách hàng của chúng tôi, bằng cách tạo ra những sản phẩm chất lượng đến tay người tiêu dùng.",
        photo: "./assests/images/news/news6.jpg",
    },
];

const newsContainer = document.querySelector(".news-container");

newsContainer.innerHTML = newsList
    .map(
        (item) => `<div class="news">
                <img
                    src="${item.photo}"
                    alt=""
                />
                <div class="news-body">
                    <p class="news-title">
                        ${item.title}
                    </p>
                    <p class="news-description">
                        ${item.desc}
                    </p>
                </div>
            </div>`
    )
    .join("");
