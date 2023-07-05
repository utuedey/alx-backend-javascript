export default function getStudentIdsSum(students) {
  return students.reduce((acumulator, currentValue) => acumulator + currentValue.id, 0);
}
