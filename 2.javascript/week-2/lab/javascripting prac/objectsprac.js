// const webDevClassroom = {  
//     students: ['cheese', 'sauce', 'pepperoni'],  
//     instructionalTeam: {
//         instructor: 'Brandon'
//     },  
//     projection: '75 in TV'
// }  
// function listStudents() {
//     webDevClassroom.students.forEach(student => console.log(student))
// }
// // listStudents()
// listTeacher = () => {
//     console.log(webDevClassroom.instructionalTeam.instructor)
// }
// listTeacher()
function course(students, teachers, projector) {
    this.students = students;
    this.teachers = teachers;
    this.projector = projector;
}
let course2 = new course(['n', 'a', 't'], 'brandon', '75 in tv')


console.log(course2.students[0])