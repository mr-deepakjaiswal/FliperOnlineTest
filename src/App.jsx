import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import SideBar from './Components/SideBar'
import TopicSelection from './Components/TopicSelection '

function App() {
  return (
    <>
      <Navbar />
      <Login />
      <TopicSelection />
      <SideBar />
    </>
  )
}

export default App
