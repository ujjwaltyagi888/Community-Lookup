import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";



function App() {
  return (
    <Routes>
                <Route path="/" element={<Redirect />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home/*" element={<Home/>} />
                <Route path="/profile/*" element={<Profile />}/>
         </Routes>
  );
}

export default App;
