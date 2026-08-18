import { useEffect, useState } from "react";

import Login from "./components/Login";
import Navbar from "./components/Navbar";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [students, setStudents] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [editIndex, setEditIndex] = useState(-1);

  const [search, setSearch] = useState("");

  // LOAD STUDENTS FROM LOCAL STORAGE
  useEffect(() => {
    const savedStudents =
      JSON.parse(localStorage.getItem("students")) || [];
    setStudents(savedStudents);
  }, []);

  // SAVE STUDENTS TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );

  }, [students]);

  // LOGIN
  const login = () => {
    setIsLoggedIn(true);
  };

  // LOGOUT
  const logout = () => {
    setIsLoggedIn(false);
    setShowForm(false);
    setEditIndex(-1);
  };

  // SHOW ADD FORM
  const handleAddStudent = () => {
    setEditIndex(-1);
    setShowForm(true);
  };

  // CLOSE FORM
  const handleCloseForm = () => {
    setShowForm(false);
    setEditIndex(-1);
  };

  // ADD STUDENT
  const addStudent = (student) => {
    setStudents([...students, student]);
    setShowForm(false);
  };

  // EDIT STUDENT
  const editStudent = (index) => {
    setEditIndex(index);
    setShowForm(true);
  };

  // UPDATE STUDENT
  const updateStudent = (updatedStudent) => {
    const updatedStudents = [...students];
    updatedStudents[editIndex] = updatedStudent;
    setStudents(updatedStudents);
    setEditIndex(-1);
    setShowForm(false);
  };

  // DELETE STUDENT
  const deleteStudent = (index) => {
    const answer = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (answer) {
      const updatedStudents =
        students.filter((_, i) => i !== index);
      setStudents(updatedStudents);

    }

  };

  // SEARCH
  const filteredStudents = students.filter((student) => {
    const keyword = search.toLowerCase();

    return (
      student.id.toLowerCase().includes(keyword) ||
      student.name.toLowerCase().includes(keyword) ||
      student.email.toLowerCase().includes(keyword)
    );
  });

  // IF NOT LOGGED IN
  if (!isLoggedIn) {

    return (
      <Login onLogin={login} />
    );

  }

  // LOGGED IN UI
  return (

    <>

      <Navbar onLogout={logout} />

      <div className="container mt-4">

        {/* STUDENT FORM */}

        {showForm && (

          <StudentForm

            students={students}

            editIndex={editIndex}

            onAddStudent={addStudent}

            onUpdateStudent={updateStudent}

            onClose={handleCloseForm}

          />

        )}


        {/* STUDENT LIST */}

        <StudentList

          students={filteredStudents}

          search={search}

          setSearch={setSearch}

          onAdd={handleAddStudent}

          onEdit={editStudent}

          onDelete={deleteStudent}

        />

      </div>

    </>

  );

}

export default App;