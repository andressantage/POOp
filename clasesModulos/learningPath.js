export default class LearningPath {
    constructor({
      id,
      title,
      courses = [],
    }) {
      this.id = id;
      this.title = title;
      this.courses = courses;
      this.coursesQuantity = courses.length;
    }
  };
  