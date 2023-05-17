// Vid 155: DOM events

// 1. Attribute events
// 2. Assign event using the element node

var h1Elements = document.querySelectorAll('h1')

for (var i = 0; i < h1Elements.length; i++) {
    h1Elements[i].onclick = function (e) {
        console.log(e.target)
    }
}


// ------------------------------------------------------------------------------------------------------------------------------------------------------------


console.log('BTTH')

// Cho trước thẻ button, các bạn hãy viết code JS sao cho khi click vào button sẽ đổi màu chữ button sang màu #fff.


var buttonE = document.querySelector('button')

buttonE.onclick = function (e) {
    buttonE.style.color = '#fff'
}