export default function getStudentsByLocation(students, city) {
  if (typeof (city) === 'string') {
    return students.filter((student) => student.location === city);
  }

  return [];
}
