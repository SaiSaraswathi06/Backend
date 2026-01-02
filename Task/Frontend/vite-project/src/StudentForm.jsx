import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StudentForm() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    year: "",
    address: ""
  });

  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const loadStudents = async () => {
    const res = await axios.get("http://localhost:5000/users");
    setStudents(res.data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleChange = e =>
    setStudent({ ...student, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:5000/users", student);

    setStudent({
      name: "",
      email: "",
      phone: "",
      course: "",
      year: "",
      address: ""
    });

    loadStudents();
  };

  return (
    <div className="page">
      <div className="form-box">
        <h1>Student Registration Form</h1>

        {/* PERSONAL DETAILS */}
        <h3 className="section-title">Personal Details</h3>
        <form className="form-grid" onSubmit={handleSubmit}>
          <input
            className="full"
            name="name"
            placeholder="Student Name"
            value={student.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            placeholder="Email"
            value={student.email}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={student.phone}
            onChange={handleChange}
            required
          />

          {/* ACADEMIC DETAILS */}
          <div className="full">
            <h3 className="section-title">Academic Details</h3>
          </div>

          <input
            name="course"
            placeholder="Course"
            value={student.course}
            onChange={handleChange}
            required
          />

          <input
            name="year"
            placeholder="Year"
            value={student.year}
            onChange={handleChange}
            required
          />

          {/* ADDRESS */}
          <div className="full">
            <h3 className="section-title">Address Details</h3>
          </div>

          <input
            className="full"
            name="address"
            placeholder="Address"
            value={student.address}
            onChange={handleChange}
            required
          />

          <button className="full">Add Student</button>
        </form>
      </div>

      {/* SMALL CARDS */}
      <div className="card-section">
        <h2>Registered Students</h2>

        <div className="card-grid">
          {students.map(s => (
            <div className="small-card" key={s.id}>
              <p><b>{s.name}</b></p>
              <p>{s.phone}</p>
              <button onClick={() => navigate(`/student/${s.id}`)}>
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentForm;
