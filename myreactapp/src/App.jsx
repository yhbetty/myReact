import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";

export default function App() {
    return (
        <div className="wrap">
            <Navbar />
            <hr />
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/news" element={<News/>}></Route>
            </Routes>
        </div>
    )
}