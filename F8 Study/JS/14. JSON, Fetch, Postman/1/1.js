/* 
    1. JSON: là một định dạng dữ liệu, 1 forrmat ( chuỗi )
    2. Viết tắt của JavaScript Object Notation
    3. JSON: thể hiện được dạng Number, String, Boolean, Null, Array, Object
    Thao tác Mã hóa và giải mã ( Encode / Decode )
    Stringify convert nó sang kiểu mã khác: Từ JS types -> JSON
    Parse: Từ JSON -> JS types
*/

var json = '["JS", "ReactJS", "CSS"]'

// var json = '{"name":"Minh Duc", "age":32}'


// console.log(JSON.parse(json))


console.log(JSON.stringify(json))