// DOM attributes
// var heading = document.querySelector('h1')

// heading.setAttribute('class', 'justheading')

var heading = document.querySelector('h2')

heading.title = 'title-test'

console.log(heading.getAttribute('title'))


// ------------------------------------------------------------------------------------------------------------------------


console.log('BTVN')
/*

Cho sẵn file HTML, các bạn hãy thực hiện các yêu cầu sau:

Thêm thuộc tính title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h1.
Thêm thuộc tính data-title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h1.
Thêm thuộc tính href có giá trị "https://fullstack.edu.vn/" cho thẻ a.
Thêm thuộc tính target có giá trị "_blank" cho thẻ a.

*/

var heading = document.querySelector('h1')

var addTaga = document.querySelector('a')

heading.title = 'F8 - Học lập trình để đi làm'

heading.setAttribute('data-title', 'F8 - Học lập trình để đi làm')

addTaga.href = 'https://fullstack.edu.vn/'

addTaga.setAttribute('target', '_blank')