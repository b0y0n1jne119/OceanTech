var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal(orders) {
    var sum = 0  // Cho tổng ban đầu bằng 0 rồi khai báo for vòng lặp để tính price mỗi lần lặp lại
    var sourceLength = orders.length
    for (var i = 0; i < sourceLength; i++) {
        sum = sum + orders[i].price
    }

    return sum   // Số tiền được trả về
}

// Expected results:
getTotal(orders) // Output: 8700000