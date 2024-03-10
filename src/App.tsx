import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { EmployeeList } from "./pages/EmployeeList";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </>
  );
}

export default App;
