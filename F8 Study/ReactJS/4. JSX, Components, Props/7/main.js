// function test() {
//     setTimeout(() => console.log('1'), 0)
//     console.log('2')
//     console.log('3')
// }

// function httpGetAsync(theUrl, callback) {
//     let xmlHttp = new XMLHttpRequest()
//     xmlHttp.onreadystatechange = function () {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp)
//     }
//     xmlHttp.open('Get', theUrl, true)
//     xmlHttp.send(null)
// }

// httpGetAsync('https://picsum.photos/200/300', (data) => {
//     console.log(data)
//     document.getElementById('img__1').setAttribute('src', data.responseURL)

//     httpGetAsync('https://picsum.photos/200/300', (data) => {
//         document.getElementById('img__2').setAttribute('src', data.responseURL)

//         httpGetAsync('https://picsum.photos/200/300', (data) => {
//             document.getElementById('img__3').setAttribute('src', data.responseURL)
//         })
//     })
// })

// test()

// ------------------------------------------------------------------

// Promise
// function httpGetAsync(theUrl, resolve) {
//     let xmlHttp = new XMLHttpRequest()
//     xmlHttp.onreadystatechange = function () {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200) resolve(xmlHttp)
//     }
//     xmlHttp.open('Get', theUrl, true)
//     xmlHttp.send(null)
// }

// const currentPromise = new Promise((resolve, reject) => {
//     httpGetAsync('https://picsum.photos/200/300', resolve)
// })

// const promise2 = new Promise((resolve, reject) => {
//     httpGetAsync('https://picsum.photos/200/300', resolve)
// })

// const promise3 = new Promise((resolve, reject) => {
//     httpGetAsync('https://picsum.photos/200/300', resolve)
// })

// // chaining
// currentPromise
//     .then((data) => {
//         document.getElementById('img__1').setAttribute('src', data.responseURL)
//         return promise2
//     })
//     .then((data) => {
//         document.getElementById('img__2').setAttribute('src', data.responseURL)
//         return promise3
//     })
//     .then((data) => {
//         document.getElementById('img__3').setAttribute('src', data.responseURL)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// ------------------------------------------------------------------

// Async await
function httpGetAsync(theUrl, resolve) {
    let xmlHttp = new XMLHttpRequest()
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) resolve(xmlHttp)
    }
    xmlHttp.open('Get', theUrl, true)
    xmlHttp.send(null)
}

const currentPromise = new Promise((resolve, reject) => {
    httpGetAsync('https://picsum.photos/200/300', resolve)
})

const promise2 = new Promise((resolve, reject) => {
    httpGetAsync('https://picsum.photos/200/300', resolve)
})

const promise3 = new Promise((resolve, reject) => {
    httpGetAsync('https://picsum.photos/200/300', resolve)
})

const executeAsync = async () => {
    try {
        const response = await currentPromise
        document.getElementById('img__1').setAttribute('src', response.responseURL)

        const response2 = await promise2
        document.getElementById('img__2').setAttribute('src', response2.responseURL)

        const response3 = await promise3
        document.getElementById('img__3').setAttribute('src', response3.responseURL)
    } catch (err) {
        console.log({ err })
    }
}

executeAsync()