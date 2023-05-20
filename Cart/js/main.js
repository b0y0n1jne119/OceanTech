const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

function renderProducts() {
    
}
function getByIdSP(id) {
    const listData = getLocalStorage(keyLocalStorageListSP)
    const itemData = listData.find((item) => item.id === id)
    return itemData
}