import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Tickets from "./pages/Tickets/Tickets";
import Form from "./pages/Tickets/FormTickets/Form";


function App() {

  return (
    <>
      <div id="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/tickets/create" element={<Form />} />
          <Route path="/tickets/:id" element={<Form />} />
        </Routes>
      </div>
    </>
  )
}

export default App
