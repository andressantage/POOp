export default class Student {
    constructor({
      id,
      name,
      email,
      username,
      points = 0,
      twitter = undefined,
      instagram = undefined,
      facebook = undefined,
      approvedCourses = [],
      learningPaths = [],
    }) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.username = username;
      this.points = points;
      this.approvedCourses = approvedCourses;
      this.learningPaths = learningPaths;
      this.socialMedia = {
        twitter,
        instagram,
        facebook,
      };
    }
  };
  