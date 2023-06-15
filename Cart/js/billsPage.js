const listBillsAPI = 'http://localhost:3000/DANHSACHDONHANG'

app.getDataAPI(listBillsAPI, renderBills)

function showOrHideDetailList(event) {
    let check = event.target.parentElement.childNodes[3].style.display
    if (check === 'none' || check === '') { event.target.parentElement.childNodes[3].style.display = 'block' }
    else event.target.parentElement.childNodes[3].style.display = 'none'
}

function removeBill(id) {
    if (confirm("Bạn chắc có muốn xóa hóa đơn này không?")) {
        fetch(listBillsAPI)
            .then(response => response.json())
            .then(data => data.find(b => b.idUser === id))
            .then(customer => {
                let url = listBillsAPI + '/' + customer.id

                app.deleteDataAPI(url)
                rePayBillToLocal(customer.cart)
            })
    }
}

function editCustomer(edit, callback) {
    let url = listBillsAPI + '/' + '1'
    let options = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(edit),
    }
    fetch(url, options)
        .then(response => response.json())
        .then(callback)
}

function rePayBillToLocal(payBack) {
    let data = app.getDataFromLocalStorage(app.keyLocalStorageListSP)
    payBack.forEach(a => {
        data.find(b => {
            if (b.id === a.idSP) {
                b.quantity += a.soLuong
            }
        })
    })
    app.upLoadDataToLocalStorage(app.keyLocalStorageListSP, data)
}