import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import PickYourKit from './components/PickYourKit';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';

function Home() {
  const [count, setCount] = useState(0)

  //maybe this will be Kits.ts with each kit as an entry
  let items = ["kit 1","kit 2","kit 3", "etc"];

  return (
    <>
      <h1 id="header">Go BOLD, Go VANTA</h1>
      <PickYourKit
        items={items}
        heading={'pick your kit section'}
        onSelectItem={() => console.log('kit selected')}
      />
      <HowItWorks />
      <Testimonials />
    </>
  )
}

function About() {
  return (
    <>TODO</>
  );
}

function Contact() {
  return (
    <>TODO</>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
