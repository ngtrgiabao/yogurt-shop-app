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

const productWrapper = document.querySelector(".product-wrapper");

const localStorageLength = localStorage.length;
let value = 0;

for (let i = 0; i < localStorageLength; i++) {
    const key = localStorage.getItem(localStorage.key(i));
    const data = key.split(",");
    const priceString = data[2].replace("]", "");
    const title = data[1].replace('"', "").replace('"', "");
    const price = parseInt(priceString, 10);

    let arr = [];

    arr.push(localStorage.key(i).slice("0", "5"));

    // productWrapper.innerHTML = `<div class="product-item">
    //                         <div class="product-item-name">
    //                             <label class="product-item-title"
    //                                 >${title}</label
    //                             >

    //                             <i
    //                                 class="fa-solid fa-xmark remove"
    //                                 aria-hidden="true"
    //                             ></i>
    //                         </div>
    //                         <div class="quantity">
    //                             <label for=""
    //                                 >Số lượng (lốc) - 20.000 vnd / lốc
    //                             </label>
    //                             <br />
    //                             <input
    //                                 class="product-nums"
    //                                 type="number"
    //                                 value="0"
    //                             />
    //                         </div>
    //                     </div>`;
    console.log(arr.sort());

    value += price;
}

const total = document.querySelector(".total");
window.onload = () => {
    total.innerText = value;
};
