import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css'
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";

function App() {
  const [modalActive, setModalActive] = useState("");

  const closeModal = () => {
    setModalActive("");
  };

  return (
    <>
    <Header />
    <Main modalActive={modalActive} setModalActive={setModalActive} closeModal={closeModal} />
    <Footer />
    </>
  )
}

export default App
