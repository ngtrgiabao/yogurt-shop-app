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
const s = document.querySelector(".product-wrapper");

// const addCart = (index) => {
//     const data = [];
//     const product = [
//         productList[index].id,
//         productList[index].name,
//         productList[index].price,
//     ];

//     data.push(...product);
//     localStorage.setItem(
//         productList[index].id + " - " + Math.random(),
//         JSON.stringify(data)
//     );

//     let value = localStorage.length;
//     cartNums.innerText = value;
// };

let cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

const cartNums = document.querySelector(".cart-nums");

const value = JSON.parse(localStorage.getItem("cart")).length;
window.onload = () => {
    cartNums.innerText = value;
};

const getIndex = (id) => cart.indexOf(cart.find((item) => item.id === id));

const addCart = (id) => {
    if (productList[id].count > 0) {
        cart.push({
            id: productList[id].id,
            name: productList[id].name,
            price: productList[id].price,
            count: productList[id].count + 1,
        });
    } else {
        cart.push({
            id: productList[id].id,
            name: productList[id].name,
            price: productList[id].price,
            count: productList[id].count,
        });
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    const value = JSON.parse(localStorage.getItem("cart")).length;
    cartNums.innerText = value;
};

const removeCart = (id) => {
    getIndex(productList[id].id) > -1
        ? cart.splice(getIndex(productList[id].id), 1)
        : "";
    const value = JSON.parse(localStorage.getItem("cart")).length;
    localStorage.setItem("cart", JSON.stringify(cart));
    cartNums.innerText = value;
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
    
                                <button onclick="addCart(${index})" type="submit">Đặt mua</button>
                            </div>
                        </div>
                    </section>

                    <button onclick="removeCart(${index})">clickme</button>
    `
    )
    .join("");
