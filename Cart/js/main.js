const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const shoeStore = $('.list-item-carts')

function renderProducts() {
    getLocalStorage(keyLocalStorageListSP).forEach((item) => {
        const htmls = `
        <div class="cart-img">
            <img src="${item.imgURL}"/>
        </div>
        <div>{${item.id}}</div>
        <h4 class="cart-title">${item.name}</h4>
        <div>
            <p>${item.price}</p>
            <p>${item.quantity}</p>
        </div>
        `
        shoeStore.insertAdjacentHTML('beforeend', htmls)
    })
}

function addSP(id) {

}