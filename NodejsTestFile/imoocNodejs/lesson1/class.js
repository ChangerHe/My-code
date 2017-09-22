/**
 * Created by Administrator on 2017/9/19.
 */
var teacher = require('./teacher')
var student = require('./student')

function add(teacherName, students){
    teacher.add(teacherName)

    students.forEach(function(item, index){
        student.add(item)
    })
}

exports.add = add