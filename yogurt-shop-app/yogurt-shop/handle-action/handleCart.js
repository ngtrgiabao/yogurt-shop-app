const removeCartItemButtons = document.getElementsByClassName("remove");
for (const element of removeCartItemButtons) {
    const button = element;
    button.addEventListener("click", (e) => {
        const buttonClicked = e.target;
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotal();
    });
}

const add = () => {
    let value = document.querySelector(".product-nums").value;
    value++;
    document.querySelector(".product-nums").value = value;

    let valueJSON = JSON.stringify({
        name: "hello",
        value: value,
    });
    localStorage.setItem("key", valueJSON);
};

const remove = () => {
    let value = document.querySelector(".product-nums").value;

    let valueJSON = JSON.stringify({
        name: "hello",
        value: value,
    });

    if (value <= 0) {
        document.querySelector(".product-nums").value = 0;
        localStorage.removeItem("key", valueJSON);
    } else {
        localStorage.setItem("key", valueJSON);
        value--;
    }

    document.querySelector(".product-nums").value = value;
};

// const addBtn = document.querySelector(".add").addEventListener("click", add);
// const removeBtn = document.addEventListener("click", remove);

const removeCart = (id) => {
    const key = JSON.parse(localStorage.getItem("cart"));

    key.splice(id, 1);

    localStorage.setItem("cart", JSON.stringify(cart));
    let value = localStorage.length;
    cartNums.innerText = value;
};

window.onload = () => {
    const total = document.querySelector(".total");
    const productWrapper = document.querySelector(".product-wrapper");
    const key = JSON.parse(localStorage.getItem("cart"));
    let value = 0;
    let arr = [];

    for (let i = 0; i < key.length; i++) {
        const priceData = key;
        const priceString = priceData[i].price;
        const price = parseInt(priceString, 10);

        console.log(priceString);

        const cart = JSON.parse(localStorage.getItem("cart"));

        value += price;

        productWrapper.innerHTML = cart
            .map(
                (item) => `<div class="product-item">
                            <div class="product-item-name">
                                <label class="product-item-title"
                                    >${item.name}</label
                                >

                                <i onclick="removeCart(${item.id})"
                                    class="fa-solid fa-xmark remove"
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <div class="quantity">
                                <label for=""
                                    >Số lượng:
                                </label>
                                <input
                                    class="product-nums"
                                    type="number"
                                    value="0"
                                />
                            </div>
                        </div>`
            )
            .join("");

        arr.push(key[i].name);
    }

    console.log(Object.values(arr).sort());

    total.innerHTML = value;
};
