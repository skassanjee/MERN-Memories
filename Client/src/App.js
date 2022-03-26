import Navbar from "./Components/Navbar/Navbar";
import Form from "./Components/Form/Form";
import Posts from "./Components/Posts/Posts";
import axios from "axios";
import react, { useState } from "react";

function App() {

  return (
    <div>
      <Navbar />
      <Form />
      <Posts />
    </div>
  );
}

export default App;
