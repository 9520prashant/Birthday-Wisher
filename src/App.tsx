import "./App.css"
import Birthday from "./pages/Birthday";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/birthday" element={<Birthday/>}/>
      </Routes>
    </>
  )
}

export default App
