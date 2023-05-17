function giaiThua(number) {
    if (number > 0) {
        return number * giaiThua(number - 1)
    }
    
    return 1
}

console.log(giaiThua(6))

//Bài tập giải toán giai thừa bằng đệ quy