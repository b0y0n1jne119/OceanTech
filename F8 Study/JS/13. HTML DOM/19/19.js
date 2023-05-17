// Vid 160: Event listener

/*

    1. Event listener: sự kiện lắng nghe các sự kiện trong DOM
    2. JSON
    3. Fetch
    4. DOM location
    5. Local storage
    6. Session storage
    7. Coding convention
    8. Best Practices
    9. Mistakes
    10. Performance

    1. Xử lí nhiều việc khi 1 event xảy ra
    2. Lắng nghe / Hủy bỏ lắng nghe

*/

var btnE = document.querySelector('button')

// console.log("In case use DOM function")
// btnE.onclick = function () {
//     // Viec 1
//     console.log('Viec 1')

//     // Viec 2
//     console.log('Viec 2')

//     // Viec  3
//     alert('Viec 3')
// }

// setTimeout(function () {
//     btnE.onclick = function () { }
// }, 3000)


// -------------------------------------------------------


console.log('When we use event listener')

job1st = () => {
    console.log("Jobs 1")
}

job2nd = () => {
    console.log("Jobs 2")
}

job3rd = () => {
    console.log("Jobs 3")
}

btnE.addEventListener('click', job1st)
btnE.addEventListener('click', job2nd)

setTimeout(function () {
    btnE.removeEventListener('click', job1st)
}, 3000)  // khi muốn hủy bỏ lắng nghe sau 3s