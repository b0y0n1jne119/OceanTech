// Video 169: Promise (concept)

/*
    Promise: khái niệm để xử lý các bât đồng bộ, giảm tránh callback hell
    Trong JavaScript, có hai loại thực thi chính:
    - Sync(đồng bộ): Sync (đồng bộ): Thực thi một tác vụ một cách tuần tự, chờ tác vụ trước kết thúc mới bắt đầu tác vụ tiếp theo.
    - Async (bất đồng bộ): Thực thi tác vụ một cách không tuần tự. Tác vụ được gọi là async function sẽ được thực thi và hoàn thành trong một lần xử lý sau đó.
    - Nỗi đau
    - Lý thuyết, cách hoạt động
    - Thực hành, ví dụ

    setTimeout, setInterval, fetch
    XMLHttprequest, file reading
    request animation frame
*/
// Promise có 3 trạng thái: pending, fulfilled, rejected
var promise = new Promise(
    function (resolve, reject) {
        // resolve([
        //     {
        //         id: 1,
        //         name: 'JavaScript'
        //     },
        //     {
        //         id: 2,
        //         name: 'ReactJS'
        //     }
        // ])
        reject('Có lỗi')
    }

)

promise
    .then(function (courses) {
        console.log(courses)
    })
    .catch(function (error) { // bắt lỗi, bẫy lỗi
        console.log(error)
    })
    .finally(function () {
        console.log('Done!')
    })