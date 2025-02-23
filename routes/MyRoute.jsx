import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import VideoEditing from "../components/VideoEditing";

const MyRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/video-editing" element={<VideoEditing />} />
      </Routes>
    </div>
  );
};

export default MyRoute; 