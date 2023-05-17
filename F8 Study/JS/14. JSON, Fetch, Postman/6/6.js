// Video 174: Promise methods (resolve, reject, all)

/*
    Promise: khái niệm để xử lý các bât đồng bộ, giảm tránh callback hell
    Trong JavaScript, có hai loại thực thi chính:
    - Sync(đồng bộ): Sync (đồng bộ): Thực thi một tác vụ một cách tuần tự, chờ tác vụ trước kết thúc mới bắt đầu tác vụ tiếp theo.
    - Async (bất đồng bộ): Thực thi tác vụ một cách không tuần tự. Tác vụ được gọi là async function sẽ được thực thi và hoàn thành trong một lần xử lý sau đó.
    - Nỗi đau
    - Lý thuyết, cách hoạt động
    - Thực hành, ví dụ

    1. Promise.resolve
    2. Promise.reject
    3. Promise.all
*/
// Promise có 3 trạng thái: pending, fulfilled, rejected


// sleep = (ms) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms)
//     })
// }

// sleep(1000)
//     .then(() => {
//         console.log(1)
//         return sleep(1000)
//     })
//     .then(() => {
//         console.log(2)
//         return new Promise((resolve, reject) => {
//             reject('Error!')
//         })
//     })
//     .then(() => {
//         console.log(3)
//         return sleep(1000)
//     })
//     .then(() => {
//         console.log(4)
//         return sleep(1000)
//     })
//     .catch((err) => {
//         console.log(err)
//     })


// -----------------------------------------------------


var promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve([1])
    }, 1000)
})

var promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve([2, 3])
    }, 2000)
})

Promise.all([promise1, promise2])
    .then(([result1, result2]) => {
        console.log(result1.concat(result2))
    })