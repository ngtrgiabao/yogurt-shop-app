const removeCartItemButtons = document.getElementsByClassName("remove");
for (const element of removeCartItemButtons) {
    const button = element;
    button.addEventListener("click", (e) => {
        const buttonClicked = e.target;
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotal();
    });
}

const showCartItem = () => {
    const total = document.querySelector(".total");

    let value = 0;
    let arr = [];
    const localLength = localStorage.length;

    const productWrapper = document.querySelector(".product-wrapper");

    for (let i = 0; i < localLength; i++) {
        const indexLocalStorage = localStorage.key(i);
        const cart = JSON.parse(localStorage.getItem(indexLocalStorage));
        const price = parseInt(cart.price * cart.count);
        value += price;
        arr.push({
            name: cart.name,
            count: cart.count,
            id: indexLocalStorage,
        });

        productWrapper.innerHTML = arr
            .map(
                (item, index) => `<div class="product-item" id="${item.id}">
                            <div class="product-item-name">
                                <label class="product-item-title"
                                    >${item.name}</label
                                >
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
                        </div>
                        `
            )
            .join("");
    }

    total.innerHTML = value;
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
