import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css'
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";

function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
    <Header />
    <Main setModalActive={setModalActive} />
    <Footer />
    {modalActive === true && (<Modal setModalActive={setModalActive} />)}
    </>
  )
}

export default App
