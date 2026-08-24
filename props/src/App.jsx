import './App.css'
import StudentCard from './StudentCard'

const students = [
  {id : 1, name : "Ravi", age : 26, course : "Java"},
  {id: 2, name : "Inchara", age : 20, course : "Python"},
  {id :3, name : "Isha", age : 25, course: "Marketing"}

];

function App(){
return(
  <div className='card'>
  {students.map((student) => (
    <StudentCard 
    student={student}/>
  ))}
   </div>
  // {/* <StudentCard
  // name = "Ravi"
  // age = {26}
  // course = "React Native" />

  //   <StudentCard
  // name = "Inchara"
  // age = {20}
  // course = "React" />

  //   <StudentCard
  // name = "Isha"
  // age = {25}
  // course = "Marketing" /> */}
   
)
}
export default App;