// Video 143: InnerHTML vs OuterHTML Property

// innerHTML: bên trong và thêm được Element, outerHTML: bên ngoài

var boxElement = document.querySelector('.box')

console.log(boxElement.outerHTML)


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


console.log('BTVN 1')

/*

Các bạn hãy viết hàm render nhận vào 1 tham số là html, hàm render sẽ có nhiệm vụ chèn giá trị của html vào trong thẻ ul đã cho trước.

*/

function render(html) {
    var addLi = document.querySelector('ul')

    addLi.innerHTML = html

}
// render(`
//     <li>Khóa học HTML</li>
//     <li>Khóa học JS</li>
//     <li>Khóa học PHP</li>
// `)


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


console.log('BTVN 2')

var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var addList = document.querySelector('.courses-list')

    var newList = courses.map(function (courses) {
        return `<li>${courses}</li>`
    })

    newList.join('')

    addList.innerHTML = newList
    return addList

}

console.log(render(courses))
// render(courses)