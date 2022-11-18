const productList = [
    {
        id: "sp001",
        name: "Sữa Chua Vị Kiwi",
        price: 21000,
        count: 0,
        photo: "./assests/images/sanpham/kiwi.jpg",
        desc: "Sữa chua kiwi với chiết xuất trái cây (kiwi) đặc biệt giàu vitamin C. Kali, Vitamin E, A và lên men tự nhiên, kết hợp với mứt trái cây chua ngọt thơm mát.",
    },
    {
        id: "sp002",
        name: "Sữa Chua Vị Xoài",
        price: 22000,
        count: 0,
        photo: "./assests/images/sanpham/mango.jpg",
        desc: "Quả xoài có nguồn gốc từ châu Á được trồng ở các vùng nhiệt đới trên toàn thế giới. Có nhiều loại như cát hoài lộc, thái...",
    },
    {
        id: "sp003",
        name: "Sữa Chua Vị Dưa lưới",
        price: 23000,
        count: 0,
        photo: "./assests/images/sanpham/cantaloupe.jpg",
        desc: "Sữa Chua Vị Dưa Lưới có tác dụng giúp trẻ có hệ tiêu hóa khỏe mạnh, hấp thu tối đa chất dinh dưỡng và phát triển chiều cao, hỗ trợ tiêu hóa, miễn dịch, tăng sức đề kháng cho cơ thể",
    },
    {
        id: "sp004",
        name: "Sữa Chua Vị Mâm Xôi",
        price: 24000,
        count: 0,
        photo: "./assests/images/sanpham/blackberry.jpg",
        desc: "Quả mâm xôi là loại quả ăn họ hoa hồng, có nguồn gốc từ châu Âu, Bắc Á và được trồng ở các vùng ôn đới trên toàn thế giới. Có nhiều loại, bao gồm đen, tím và vàng",
    },
    {
        id: "sp005",
        name: "Sữa Chua Vị Dâu Tây",
        price: 25000,
        count: 0,
        photo: "./assests/images/sanpham/strawberry.jpg",
        desc: "Sữa chua dâu tây với chiết xuất trái cây (dâu tây) tự nhiên giàu vitamin C và dưỡng chất, cho làn da đẹp rạng ngời. Lên men tự nhiên, kết hợp với mứt trái cây chua ngọt thơm mát. Sữa chua dâu tây thơm ngon khó cưỡng.",
    },
    {
        id: "sp006",
        name: "Sữa Chua Vị Việt Quất",
        price: 26000,
        count: 0,
        photo: "./assests/images/sanpham/blueberry.jpg",
        desc: "Sữa chua việt quất giàu năng lượng và có hàm lượng chất béo cao, có hương vị béo ngậy từ phô mai song không gây ngấy bởi sự kết hợp chua dịu, ngọt thơm từ trái cây tươi.",
    },
    {
        id: "sp007",
        name: "Sữa Chua Vị Nho",
        price: 27000,
        count: 0,
        photo: "./assests/images/sanpham/grapes.jpg",
        desc: "Quả mâm xôi là loại quả ăn họ hoa hồng, có nguồn gốc từ châu Âu, Bắc Á và được trồng ở các vùng ôn đới trên toàn thế giới. Có nhiều loại, bao gồm đen, tím và vàng",
    },
    {
        id: "sp008",
        name: "Sữa Chua Vị Táo Xanh",
        price: 28000,
        count: 0,
        photo: "./assests/images/sanpham/green-apple.jpg",
        desc: "Quả mâm xôi là loại quả ăn họ hoa hồng, có nguồn gốc từ châu Âu, Bắc Á và được trồng ở các vùng ôn đới trên toàn thế giới. Có nhiều loại, bao gồm đen, tím và vàng",
    },
    {
        id: "sp009",
        name: "Sữa Chua Vị Dứa",
        price: 29000,
        count: 0,
        photo: "./assests/images/sanpham/pineapple.jpg",
        desc: "Quả mâm xôi là loại quả ăn họ hoa hồng, có nguồn gốc từ châu Âu, Bắc Á và được trồng ở các vùng ôn đới trên toàn thế giới. Có nhiều loại, bao gồm đen, tím và vàng",
    },
];

const products = document.querySelector(".products");

const cartNums = document.querySelector(".cart-nums");

// Lay do dai localStorage
window.onload = () => {
    cartNums.innerText = localStorage.length;
};

const addCart = (productId) => {
    const countInput =
        document.getElementById(productList[productId].id).value || 0;
    const productListID = productList[productId].id;

    // Kiem tra so luong đat san pham
    if (countInput > 100) {
        alert("Bạn không thể đặt hơn 100 sản phẩm :<");
        document.getElementById(productListID).value = "";
    } else {
        localStorage.setItem(
            productListID,
            JSON.stringify({
                name: productList[productId].name,
                price: productList[productId].price,
                photo: productList[productId].photo,
                count:
                    countInput < 0
                        ? Math.abs(countInput)
                        : parseInt(countInput),
            })
        );

        // Reset input ve 0 khi xac nhan mua
        document.getElementById(productListID).value = "";
    }

    const localLength = localStorage.length;
    cartNums.innerText = localLength;
};

const removeCart = (id) => {
    localStorage.removeItem(productList[id].id);

    const localLength = localStorage.length;
    cartNums.innerText = localLength;
};

products.innerHTML = productList
    .map(
        (item, index) =>
            `<section class="product">
                        <div class="product-item-row">
                            <img
                                loading="lazy"
                                src="${item.photo}"
                                alt=""
                            />
    
                            <h2 class="product-title">${item.name}</h2>
    
                            <p>
                                ${item.desc}
                            </p>
    
                            <div class="buy-btn">
                                <span class="product-price"
                                    >${item.price} <span class="vnd"> VND </span>
                                </span>
                                <span>
                                    <input type="number" max="100" placeholder="0" class="count" id="${item.id}"/>
                                    <button onclick="addCart(${index})" type="submit">Đặt mua</button>
                                </span>
                            </div>
                        </div>
                    </section>    `
    )
    .join("");
