const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (function () {
    const keyLocalStorageListSP = "DANHSACHSP"
    const keyLocalStorageItemCart = "DANHSACHITEMCART"
    const isObject = (data) => {
        let result = false
        if (typeof data == 'object') { result = true }
        return result
    }

    const upLoadDataToLocalStorage = (key, data) => {
        if (isObject(data)) {
            localStorage.setItem(key, JSON.stringify(data))
        }
    }

    const getDataFromLocalStorage = (key) => {
        let dataJson = localStorage.getItem(key)
        let data = []
        if (dataJson !== null) {
            data = JSON.parse(dataJson)
        }
        return data
    }

    const getDataAPI = (url, callback) => {
        fetch(url)
            .then(response => response.json())
            .then(callback)
            .catch(() => { alert(`Không thể lấy dữ liệu`) })
    }

    const postDataAPI = (url, data, callback) => {
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
        fetch(url, options)
            .then(response => response.json())
            .then(callback)
    }

    const deleteDataAPI = (url, callback) => {
        let options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        };
        fetch(url, options)
            .then(response => response.json())
            .then(callback);
    }

    const addItems = (id) => {
        let data = getDataFromLocalStorage(keyLocalStorageListSP)
        let cart = getDataFromLocalStorage(keyLocalStorageItemCart)
        let indexItem = cart.findIndex(item => item.idSP === id)
        let indexOnLocal = data.findIndex(value => value.id === id)
        if (0 === data[indexOnLocal].quantity) {
            alert("Hết hàng rồi má ơi")
        }
        else if (indexItem < 0) {
            cart.push({ 'idSP': id, 'soLuong': 1 })
        }
        else if (cart[indexItem].soLuong === data[indexOnLocal].quantity) {
            alert('Số lượng yêu cầu vượt quá số lượng hàng có trong kho')
        }
        else {
            cart[indexItem].soLuong++
        }
        upLoadDataToLocalStorage(keyLocalStorageItemCart, cart)
    }

    return {
        upLoadDataToLocalStorage,
        getDataFromLocalStorage,
        getDataAPI,
        postDataAPI,
        deleteDataAPI,
        addItems,
        keyLocalStorageListSP,
        keyLocalStorageItemCart,
    }
})()