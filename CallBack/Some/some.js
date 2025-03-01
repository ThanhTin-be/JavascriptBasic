let courses = [
    {
        name: 'Javascript',
        isFinish: false,
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
let result = courses.some(function (course, index, array) {
    return course.isFinish;
})
console.log(result);
//~~ Method này dùng để kiểm tra mảng có ít nhất 1 đứa thoả điều kiện không
//method tự định nghĩa dựa trên method some
Array.prototype.some2 = function (callback) {
    for (let index in this)// for/in lập qua các key(chỉ mục) của mảng
    {
        if (this.hasOwnProperty(index))// Loại bỏ thuộc tính kế thừa từ prototype
        {
            if (callback(this[index], index, this)) {
                return true;
            }
        }
    }
    return false;
}
//output
let result2 = courses.some2(function (course, index, array) {
    return course.isFinish;
})
console.log(result2);