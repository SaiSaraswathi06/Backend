import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentForm from "./StudentForm";
import StudentDetails from "./StudentDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentForm />} />
        <Route path="/student/:id" element={<StudentDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
