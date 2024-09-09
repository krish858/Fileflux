import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sender from "./pages/Sender";
import Reciever from "./pages/Reciever";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/send/:roomid" element={<Sender />} />
        <Route path="/recieve/:roomid" element={<Reciever />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
