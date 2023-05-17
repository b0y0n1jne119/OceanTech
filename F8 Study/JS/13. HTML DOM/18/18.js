// Vid 159: PreventDefault and StopPropagation

/*
    DOM events

    1. prevenDefault: loại bỏ hành vi mặc định của trình duyệt
    2. stopPropagation: loại bỏ sự kiện nổi bọt

*/
// console.log('Vi du 1')
// var aE = document.links // lấy những thẻ a, anchors cũng được nhưng phải đặt name=""

// for (var i = 0; i < aE.length; i++) {
//     aE[i].onclick = function (e) {
//         if (!e.target.href.startsWith('https://chat.zalo.me/')) {
//             e.preventDefault()
//         }
//     }
// }


// --------------------------------------------------------

//  // console.log('Vi du 2')
// var uE = document.querySelector('ul')

// uE.onmousedown = function (e) {
//     e.preventDefault()
// }

// uE.onclick = function (e) {
//     console.log(e.target)
// }


// --------------------------------------------------------

console.log('vi du 3')
document.querySelector('div').onclick =
    function () {
        console.log('DIV')
    }

document.querySelector('button').onclick =
    function (e) {
        e.stopPropagation()
        console.log('Click me')
    }