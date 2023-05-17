// Video 168: Promise (pain)

/*
    Promise
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

// Callback hell
// Pyramid of doom

setTimeout(function () {
    console.log(1);
    setTimeout(function () {
        console.log(2);
        setTimeout(function () {
            console.log(3);
            setTimeout(function () {
                console.log(4);
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)