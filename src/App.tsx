
import '../src/CSS/App.css'
import Head from './Components/Head'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/contact';
import About from './Components/about';

function App() {



  return (
    <>
      
      <BrowserRouter>
      <Head></Head>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
