// Video 175: Promise example

// Cần hiểu về Array, Function, callback, Promise, DOM

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var users = [
    {
        id: 1,
        name: 'Minh Duc',
    },
    {
        id: 2,
        name: 'Son Dang',
    },
    {
        id: 3,
        name: 'Duc Tu',
    }
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'A Sơn chưa ra video à :('
    },
    {
        id: 2,
        user_id: 2,
        content: "Sap ra",
    },
    {
        id: 3,
        user_id: 1,
        content: "Chán thế hả anh",
    }
]

/* 
    1. Lấy comments
    2. Từ comments lấy ra user_id
        từ user_id lấy ra user tương ứng
    Fake API
*/

getComments = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(comments)
        }, 1000)
    })
}

getUsersByIds = (userIds) => {
    return new Promise((resolve) => {
        var result = users.filter((user) => {
            return userIds.includes(user.id)
        })
        setTimeout(() => {
            resolve(result)
        }, 1000)
    }, 1000)
}

getComments()
    .then((comments) => {
        var userIds = comments.map((comment) => {
            return comment.user_id
        })

        return getUsersByIds(userIds)
            .then((users) => {
                return {
                    users: users,
                    comments: comments,
                }
            })
    })

    .then((data) => {
        var commentBlock = $('.comments--block')

        var html = ''
        data.comments.forEach((comment) => {
            var user = data.users.find((user) => {
                return user.id === comment.user_id
            })

            html += `<li>${user.name}: ${comment.content}</li>`
        })

        commentBlock.innerHTML = html
    })