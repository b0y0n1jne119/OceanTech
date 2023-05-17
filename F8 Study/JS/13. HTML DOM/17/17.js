// Vid 158: DOM events example

/*

    1. Input / select
    2. Key up / down

*/

// var storeInput;

// var inputE = document.querySelector('input')

// inputE.oninput = function (e) {
//     storeInput = e.target.value
// }

//  ----------------------------------------------------------------------------------------------------------------------


// var checkE = document.querySelector('input[type="checkbox"]')

// checkE.onchange = function (e) {
//     console.log(e.target.checked)
// }


//  ----------------------------------------------------------------------------------------------------------------------


// var selectE = document.querySelector('select')

// selectE.onchange = function (e) {
//     console.log(e.target.value)
// }


//  ----------------------------------------------------------------------------------------------------------------------


document.onkeydown = function (e) {
    console.log(e.which) // kiểm tra key bàn phím người dùng nhập vào mã số bao nhiêu, ví dụ nếu bấm Space sẽ ra số 32
}