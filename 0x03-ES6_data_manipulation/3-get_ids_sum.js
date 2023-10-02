export default function getStudentIdsSum(students) {
  return students.reduce((ids, c) => ids + c.id, 0);
}
