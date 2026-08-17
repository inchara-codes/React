function StudentCard(props) {

  const {
    image,
    name,
    course,
    age,
    marks,
    city,
    isPlaced,
    skills,
    linkedin
  } = props;

  return (
    <div className={isPlaced ? "card placed" : "card notPlaced"}>
      <img src={image} alt={name} className="student-image" />

      <h2>{name}</h2>

      <p className="course">{course}</p>

      <p>Age: {age}</p>

      <p>Marks: {marks}</p>

      <p>City: {city}</p>

      <p>Status: {isPlaced ? "Placed" : "Not Placed"}</p>

      {marks >= 90 ? <h3> Topper</h3> : null}

      <p>
        <strong>Skills:</strong> {skills.join(", ")}
      </p>

      <a href={linkedin} target="_blank" rel="noreferrer" className="btn">
        View Profile
      </a>
    </div>
  );
}

export default StudentCard;