import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import Jobsuche from "./components/Jobsuche";
import CreateApplication from "./components/createApplication/CreateApplication";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobsuche" element={<Jobsuche />} />
        <Route
          path="/dashboard/createapplication"
          element={<CreateApplication />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
