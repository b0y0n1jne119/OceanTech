function setLocalStorage(key = "", value = []) {
    if (typeof value !== "underfined") {
        localStorage.setItem(key, JSON.stringify(value))
    }
}

function getLocalStorage(key = "") {
    let data = localStorage.getItem(key)
    return JSON.parse(data) || []
}