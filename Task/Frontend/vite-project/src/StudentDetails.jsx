import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);

  const loadStudent = async () => {
    const res = await axios.get("http://localhost:5000/users");
    const found = res.data.find(s => s.id == id);
    setStudent(found);
  };

  useEffect(() => {
    loadStudent();
  }, []);

  const updateStudent = async () => {
    await axios.put(`http://localhost:5000/users/${id}`, student);
    alert("Student updated");
  };

  const deleteStudent = async () => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    alert("Student deleted");
    navigate("/");
  };

  if (!student) return <h2>Loading...</h2>;

  return (
    <div className="page">
      <div className="form-box">
        <h1>Student Details</h1>

        <input
          value={student.name}
          onChange={e =>
            setStudent({ ...student, name: e.target.value })
          }
        />
        <input
          value={student.email}
          onChange={e =>
            setStudent({ ...student, email: e.target.value })
          }
        />
        <input
          value={student.phone}
          onChange={e =>
            setStudent({ ...student, phone: e.target.value })
          }
        />
        <input
          value={student.address}
          onChange={e =>
            setStudent({ ...student, address: e.target.value })
          }
        />

        <button onClick={updateStudent}>Edit</button>
        <button
          style={{ marginLeft: 10, background: "#dc2626" }}
          onClick={deleteStudent}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudentDetails;
