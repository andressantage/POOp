export default class Course {
    constructor({
      id,
      name,
      classes = [],
      teacher,
    }){
      this.id = id;
      this.name = name;
      this.classes = classes;
      this.teacher = teacher;
    };
  }