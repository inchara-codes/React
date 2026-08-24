export default function StudentCard({ student }) {
  return (
    <div className="container">
      <h2>{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
    </div>
  );
}