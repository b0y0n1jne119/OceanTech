const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var cartAPI = "http://localhost:3000/carts"

start = () => {

}

start()

// Function

function getCarts(cb) {
    fetch(cartAPI)
        .then((response) => {
            return response.json()
        })
        .then(cb)
}

function renderCarts(carts) {
    let listCartsBlock = $('#list-carts')
    let htmls = courses.map((cart) => {
        return `
        <li>
            <h4></h4>
            
        </li>
        `
    })
}