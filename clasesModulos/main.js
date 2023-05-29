import Teacher from './teacher.js'
import Course from './course.js'
import Lesson from './lesson.js'
import LearningPath from './learningPath.js'
import Student from './student.js'


//* Teachers ---------------------
const FreddyVega = new Teacher({
  id: 1,
  name: 'Freddy Vega',
  speciality: 'CEO',
});
console.log(FreddyVega);

const ClauAlderete = new Teacher({
  id: 2,
  name: 'Clau Alderete',
  speciality: 'Digital Marketing',
});
console.log(ClauAlderete);


//* Lecciones -----------------------
const lesson1PB = new Lesson({
  id: 1,
  title: 'Clase 1 Programación Básica',
});
console.log(lesson1PB);

const lesson1DM = new Lesson({
  id: 2,
  title: 'Clase 1 Marketing Digital',
});
console.log(lesson1DM);


//* Cursos ----------------------------
const cursoProgramacionBasica = new Course({
  id: 1,
  name: "Curso gratis de programación básica",
  classes: [lesson1PB],
  teacher: FreddyVega,
});
console.log(cursoProgramacionBasica);

const cursoIntroMarketingDigital = new Course({
  id: 2,
  name: 'Curso de Introducción al Marketing Digital',
  classes: [lesson1DM],
  teacher: ClauAlderete
});
console.log(cursoIntroMarketingDigital);


//* Escuelas ---------------------
const escuelaDesarrolloWeb = new LearningPath({
  id: 1,
  title: 'Escuela de Desarrollo Web',
  courses: [cursoProgramacionBasica],
});
console.log(escuelaDesarrolloWeb);

const escuelaMarketingDigital = new LearningPath({
  id: 2,
  title: 'Marketing Digital',
  courses: [cursoIntroMarketingDigital],
});
console.log(escuelaMarketingDigital);


//* Estudiantes ---------------------
const miguel = new Student({
  id: 1,
  name: 'Miguel',
  email: 'miguel@gmail.com',
  username: 'mike',
  points: 40000,
  approvedCourses: [cursoProgramacionBasica],
  learningPaths: [escuelaDesarrolloWeb]
});
console.log(miguel);