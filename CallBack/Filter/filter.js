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
let result = courses.filter(function (course, index, array) {
    return course.isFinish;
})
console.log(result)
//method tự định nghĩa dựa trên method filter
Array.prototype.filter2 = function (callback) {
    let output = [];
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            let result = callback(this[index], index, this)
            if (result) {
                output.push(this[index]);
            }
        }
    }
    return output;
}
let result2 = courses.filter2(function (course, index, array) {
    return course.isFinish;
})
console.log(result2) 