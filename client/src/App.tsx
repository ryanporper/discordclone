import React from "react";
import "./App.css";
import Community from "./components/Community";
import Footer from "./components/Footer";
import Hanging from "./components/Hanging";
import Header from "./components/Header";
import Invite from "./components/Invite";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech";

function App() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Invite />
      <Hanging />
      <Community />
      <Tech />
      <Footer />
    </div>
  );
}

export default App;
