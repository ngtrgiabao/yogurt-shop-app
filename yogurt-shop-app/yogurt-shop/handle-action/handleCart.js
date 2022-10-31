// const removeCartItemButtons = document.getElementsByClassName("remove");
// for (const element of removeCartItemButtons) {
//     const button = element;
//     button.addEventListener("click", (e) => {
//         const buttonClicked = e.target;
//         buttonClicked.parentElement.parentElement.remove();
//         updateCartTotal();
//     });
// }

const updateCartTotal = () => {
    // const cartItemContainer = document.getElementsByClassName("product")[0];
    // const cartRows =
    //     cartItemContainer.getElementsByClassName("product-item-row");
    // for (const element of cartRows) {
    //     let cartRow = element;
    //     let priceElement = cartRow.getElementsByClassName("product-price")[0];
    //     let quantityElement = cartRow.getElementsByClassName("product-nums")[0];
    //     console.log(priceElement, quantityElement);
    // }
    // window.localStorage.removeItem("code", 100);
    // console.log(cartItemContainer);
};

const add = () => {
    let value = document.querySelector(".product-nums").value;
    value++;
    document.querySelector(".product-nums").value = value;

    let valueJSON = JSON.stringify({
        name: "hello",
        value: value,
    });
    localStorage.setItem("key", valueJSON);

    console.log(localStorage.getItem("key"));
};

const remove = () => {
    let value = document.querySelector(".product-nums").value;
    value--;

    let valueJSON = JSON.stringify({
        name: "hello",
        value: value,
    });

    if (value < 0) {
        localStorage.removeItem("key", valueJSON);
    } else {
        localStorage.setItem("key", valueJSON);
    }

    document.querySelector(".product-nums").value = value;

    console.log(localStorage.getItem("key"));
};

const s = document.querySelector(".product-wrapper");
const ss = JSON.parse(localStorage.getItem("sp005"));

s.innerHTML = `<div class="product-item">
                            <div class="product-item-name">
                                <label class="product-item-title"
                                    >${ss[1]}</label
                                >

                                <i onclick="localStorage.removeItem(ss)"
                                    class="fa-solid fa-xmark remove"
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <div class="quantity">
                                <label for=""
                                    >Số lượng (lốc) - 20.000 vnd / lốc
                                </label>
                                <br />
                                <input
                                    class="product-nums"
                                    type="number"
                                    value="0"
                                />                               
                            </div>
                        </div>`;
//  <button onclick="add()">clickk</button>
//  <button onclick="remove()">clickka</button>
