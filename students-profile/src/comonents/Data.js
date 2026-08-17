import Aarav from "../assets/Aarav.jpg";
import Priya from "../assets/Priya.jpg";
import Rohan from "../assets/Rohan.jpg";
import Sneha from "../assets/Sneha.jpg";
import Kiran from "../assets/Kiran.jpg";
import Ananya from "../assets/Ananya.jpg";
import Rahul from "../assets/Rahul.jpg";
import Meera from "../assets/Meera.jpg";
import Arjun from "../assets/Arjun.jpg";
import Divya from "../assets/Divya.jpg";
import Vikram from "../assets/Vikram.jpg";
import Nisha from "../assets/Nisha.jpg";
import Aditya from "../assets/Aditya.jpg";
import Pooja from "../assets/Pooja.jpg";
import Manoj from "../assets/Manoj.jpg";
import Ishita from "../assets/Ishita.jpg";
import Sanjay from "../assets/Sanjay.jpg";
import Neha from "../assets/Neha.jpg";
import Harsh from "../assets/Harsh.jpg";
import Kavya from "../assets/Kavya.jpg";

const students = [
  {
    id: 1,
    image: Aarav,
    name: "Aarav Sharma",
    course: "MERN Stack",
    age: 22,
    marks: 89,
    city: "Bengaluru",
    isPlaced: true,
    skills: ["HTML", "CSS", "JavaScript", "React"],
    linkedin: "https://linkedin.com/in/aaravsharma"
  },
  {
    id: 2,
    image: Priya,
    name: "Priya Verma",
    course: "Python Full Stack",
    age: 21,
    marks: 92,
    city: "Mysuru",
    isPlaced: true,
    skills: ["Python", "Django", "SQL"],
    linkedin: "https://linkedin.com/in/priyaverma"
  },
  {
    id: 3,
    image: Rohan,
    name: "Rohan Patel",
    course: "Java Full Stack",
    age: 23,
    marks: 85,
    city: "Hubballi",
    isPlaced: false,
    skills: ["Java", "Spring Boot", "MySQL"],
    linkedin: "https://linkedin.com/in/rohanpatel"
  },
  {
    id: 4,
    image: Sneha,
    name: "Sneha Rao",
    course: "Data Science",
    age: 22,
    marks: 95,
    city: "Mangaluru",
    isPlaced: true,
    skills: ["Python", "Pandas", "Machine Learning"],
    linkedin: "https://linkedin.com/in/sneharao"
  },
  {
    id: 5,
    image: Kiran,
    name: "Kiran Kumar",
    course: "MERN Stack",
    age: 20,
    marks: 80,
    city: "Belagavi",
    isPlaced: false,
    skills: ["React", "Node.js", "MongoDB"],
    linkedin: "https://linkedin.com/in/kirankumar"
  },
  {
    id: 6,
    image: Ananya,
    name: "Ananya Shetty",
    course: "Python Full Stack",
    age: 21,
    marks: 88,
    city: "Udupi",
    isPlaced: true,
    skills: ["Python", "Flask", "SQL"],
    linkedin: "https://linkedin.com/in/ananyashetty"
  },
  {
    id: 7,
    image: Rahul,
    name: "Rahul Nair",
    course: "Java Full Stack",
    age: 22,
    marks: 84,
    city: "Kochi",
    isPlaced: false,
    skills: ["Java", "Hibernate", "MySQL"],
    linkedin: "https://linkedin.com/in/rahulnair"
  },
  {
    id: 8,
    image: Meera,
    name: "Meera Joshi",
    course: "MERN Stack",
    age: 21,
    marks: 91,
    city: "Pune",
    isPlaced: true,
    skills: ["React", "Express", "MongoDB"],
    linkedin: "https://linkedin.com/in/meerajoshi"
  },
  {
    id: 9,
    image: Arjun,
    name: "Arjun Reddy",
    course: "Cyber Security",
    age: 23,
    marks: 86,
    city: "Hyderabad",
    isPlaced: true,
    skills: ["Networking", "Linux", "Ethical Hacking"],
    linkedin: "https://linkedin.com/in/arjunreddy"
  },
  {
    id: 10,
    image: Divya,
    name: "Divya Singh",
    course: "Data Science",
    age: 22,
    marks: 94,
    city: "Delhi",
    isPlaced: true,
    skills: ["Python", "NumPy", "Power BI"],
    linkedin: "https://linkedin.com/in/divyasingh"
  },
  {
    id: 11,
    image: Vikram,
    name: "Vikram Rao",
    course: "Java Full Stack",
    age: 24,
    marks: 78,
    city: "Chennai",
    isPlaced: false,
    skills: ["Java", "JSP", "Oracle"],
    linkedin: "https://linkedin.com/in/vikramrao"
  },
  {
    id: 12,
    image: Nisha,
    name: "Nisha Gupta",
    course: "Python Full Stack",
    age: 20,
    marks: 90,
    city: "Jaipur",
    isPlaced: true,
    skills: ["Python", "FastAPI", "PostgreSQL"],
    linkedin: "https://linkedin.com/in/nishagupta"
  },
  {
    id: 13,
    image: Aditya,
    name: "Aditya Menon",
    course: "MERN Stack",
    age: 22,
    marks: 83,
    city: "Thiruvananthapuram",
    isPlaced: false,
    skills: ["React", "Redux", "Node.js"],
    linkedin: "https://linkedin.com/in/adityamenon"
  },
  {
    id: 14,
    image: Pooja,
    name: "Pooja Kulkarni",
    course: "Data Science",
    age: 21,
    marks: 96,
    city: "Nagpur",
    isPlaced: true,
    skills: ["Python", "TensorFlow", "Statistics"],
    linkedin: "https://linkedin.com/in/poojakulkarni"
  },
  {
    id: 15,
    image: Manoj,
    name: "Manoj Yadav",
    course: "Java Full Stack",
    age: 23,
    marks: 81,
    city: "Lucknow",
    isPlaced: false,
    skills: ["Java", "Spring", "SQL"],
    linkedin: "https://linkedin.com/in/manojyadav"
  },
  {
    id: 16,
    image: Ishita,
    name: "Ishita Das",
    course: "MERN Stack",
    age: 20,
    marks: 87,
    city: "Kolkata",
    isPlaced: true,
    skills: ["React", "Bootstrap", "Express"],
    linkedin: "https://linkedin.com/in/ishitadas"
  },
  {
    id: 17,
    image: Sanjay,
    name: "Sanjay Kumar",
    course: "Cyber Security",
    age: 22,
    marks: 82,
    city: "Patna",
    isPlaced: false,
    skills: ["Linux", "Wireshark", "Networking"],
    linkedin: "https://linkedin.com/in/sanjaykumar"
  },
  {
    id: 18,
    image: Neha,
    name: "Neha Kapoor",
    course: "Python Full Stack",
    age: 21,
    marks: 93,
    city: "Chandigarh",
    isPlaced: true,
    skills: ["Python", "Django", "REST API"],
    linkedin: "https://linkedin.com/in/nehakapoor"
  },
  {
    id: 19,
    image: Harsh,
    name: "Harsh Vardhan",
    course: "MERN Stack",
    age: 22,
    marks: 79,
    city: "Bhopal",
    isPlaced: false,
    skills: ["JavaScript", "React", "MongoDB"],
    linkedin: "https://linkedin.com/in/harshvardhan"
  },
  {
    id: 20,
    image: Kavya,
    name: "Kavya Ramesh",
    course: "Data Science",
    age: 23,
    marks: 97,
    city: "Coimbatore",
    isPlaced: true,
    skills: ["Python", "Machine Learning", "Power BI"],
    linkedin: "https://linkedin.com/in/kavyaramesh"
  }
];

export default students;