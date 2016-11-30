var student = require('./student.js');
var teacher = require('./teacher.js');

// teacher.add('Jake');

function add(teacherName, students) {
    teacher.add(teacherName);

    students.forEach(function(val, index) {
        student.add(val);
    })
}

exports.add = add;