import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Connection from "../pages/Connection/Connection";
import Error from "../pages/Error/Error";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Connection />} />
      <Route path="/Dashboard/:id" element={<Dashboard />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
