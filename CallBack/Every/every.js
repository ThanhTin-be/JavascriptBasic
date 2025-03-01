let courses = [
    {
        name: 'Javascript',
        isFinish: true,
    },
    {
        name: 'Dart',
        isFinish: true,
    },
    {
        name: 'PHP',
        isFinish: false,
    },

];
//method có sẵn
let result = courses.every(function (course, index, array) {
    return course.isFinish;
})
console.log(result);
//~~ Method này dùng để kiểm tra mảng có tất element thoả điều kiện 
//method tự định nghĩa dựa trên method every
Array.prototype.every2 = function (callback) {
    let output = true;
    for (let index in this)// for/in lập qua các key(chỉ mục) của mảng
    {
        if (this.hasOwnProperty(index))// Loại bỏ thuộc tính kế thừa từ prototype
        {
            let result = callback(this[index], index, this)
            if (!result) // nếu  có 1 elemen không thoã điều kiện
            {
                output = false;
                break; // thoát ngay lập tức và trả về false

            }
        }
    }
    return output;
}
let result2 = courses.every2(function (course, index, array) {
    return course.isFinish;
})
console.log(result2);