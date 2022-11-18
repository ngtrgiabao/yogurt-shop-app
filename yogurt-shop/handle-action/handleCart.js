const getDiscountRate = () => {
    const d = new Date(); //lấy ngày hiện tại của máy tính
    const weekday = d.getDay(); //lấy ngày trong tuần
    const totalMins = d.getHours() * 60 + d.getMinutes(); //đổi thời gian hiện tại ra số phút tương đối trong ngày
    if (
        weekday >= 1 &&
        weekday <= 3 &&
        ((totalMins >= 420 && totalMins <= 660) ||
            (totalMins >= 780 && totalMins <= 1020))
    ) {
        return 0.1;
    }
    return 0;
};

const showCartItem = () => {
    const productWrapper = document.querySelector(".product-wrapper");
    const total = document.querySelector(".total");
    const discount = document.querySelector(".discount");
    const tax = document.querySelector(".tax");
    const totalOrders = document.querySelector(".total-orders");

    let totalPrice = 0;
    let discountPrice = 0.1;
    let taxPrice = 0.1;
    let totalOrdersPrice = 0;

    let arr = [];

    const localLength = localStorage.length;
    for (let i = 0; i < localLength; i++) {
        const indexLocalStorage = localStorage.key(i);
        const cart = JSON.parse(localStorage.getItem(indexLocalStorage));
        const price = parseFloat(cart.price * cart.count);

        totalPrice += price;

        arr.push({
            id: indexLocalStorage,
            name: cart.name,
            count: cart.count,
            photo: cart.photo,
        });

        productWrapper.innerHTML = arr
            .map(
                (item, index) => `<div class="product-item" id="${item.id}">
                                    <img loading="lazy" src="${item.photo}" alt=""/>
                                        <div class="product-item-name">
                                            <label class="product-item-title">${item.name}</label>
                                                <i onclick="removeCart('${index}')"
                                                    class="fa-solid fa-xmark remove"
                                                    aria-hidden="true"
                                                ></i>
                                        </div>
                                        <div class="quantity">
                                            <label for=""
                                                >Số lượng: 
                                            </label>        
                                            <span>${item.count}</span>                     
                                        </div>
                                </div>`
            )
            .join("");
    }

    discountPrice = discountPrice * totalPrice;
    taxPrice = taxPrice * (totalPrice - discountPrice);
    totalOrdersPrice = totalPrice - discountPrice + taxPrice;

    total.innerHTML = totalPrice.toLocaleString();
    discount.innerHTML = discountPrice.toLocaleString();
    tax.innerHTML = taxPrice.toLocaleString();
    totalOrders.innerHTML = totalOrdersPrice.toLocaleString();
};

const removeCart = (id) => {
    const key = localStorage.key(id);

    let x = document.getElementById(key);
    x.remove(x);

    localStorage.removeItem(key);

    showCartItem();
};

window.onload = () => {
    showCartItem();
};
