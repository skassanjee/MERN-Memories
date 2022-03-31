import Navbar from "./Components/Navbar/Navbar";
import Form from "./Components/Form/Form";
import Posts from "./Components/Posts/Posts";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />  
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/auth' element={<Auth />} />
        </Routes>
          
      </BrowserRouter>

    </div>
  );
}

export default App;
