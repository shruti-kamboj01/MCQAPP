import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Finish from "./pages/Finish";
import Test from "./pages/Test";
import { useState } from "react";


function App() {
  const[score, setScore] = useState(0)
  return (
   <div>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/quiz" element={<Test score={score} setScore= {setScore} />} />
        <Route path="/finish" element={<Finish score={score} />} />

       </Routes>
   </div>
  );
}

export default App;
