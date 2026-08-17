import Header from "./comonents/Header";
import StudentCard from "./comonents/StudentCard";
import students from "./comonents/Data";
import "./App.css"

export default function App() {
const studentCards = students.map(StudentRetrieval);

  function StudentRetrieval(student) {
    return (
      <StudentCard
        key={student.id}
        image={student.image}
        name={student.name}
        course={student.course}
        age={student.age}
        marks={student.marks}
        city={student.city}
        isPlaced={student.isPlaced}
        skills={student.skills}
        linkedin={student.linkedin}
      />
    );
  }

return (
  <>
    <Header />
    <div className="container">
      {studentCards}
    </div>
  </>
);
}