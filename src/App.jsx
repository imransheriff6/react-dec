import Banner from "./components/banner/banner"
import Card from "./components/card/card"
import Navbar from "./components/navbar/navbar"
import './App.css'
import bg1 from './assets/c-1.png'
import bg2 from './assets/c-2.png'
import bg3 from './assets/c-3.png'
import StateExample from "./components/state/stateExample"
import Cart from "./components/state/cart"
import SeverCall from "./components/state/serverCall"
import Form from "./components/state/form"
import ClassExample from "./components/classComponents/demo"
import Home from "./components/pages/home"
import About from "./components/pages/about"
import Contact from "./components/pages/contact"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
function App() {
  const data = [
    {
      id: '1',
      profile: bg1,
      shortNote: 'Hello',
      title: 'Super Man',
      active: false
    },
    {
      id: '2',
      profile: bg2,
      shortNote: 'Hello',
      title: 'Spider Man',
      active: true
    },
    {
      id: '3',
      profile: bg3,
      shortNote: 'Hello',
      title: 'Bat Man',
      active: false
    }
  ]
  return <>
    {/* <Navbar />
    <Banner />
    <div className="customer-parent">
     {
      data.map((ele)=><Card 
        profile={ele.profile} 
        shortNote={ele.shortNote} 
        title={ele.title} 
        active={ele.active}
        />)
     }
    </div> */}
    {/* <StateExample /> */}
    {/* <div className="customer-parent">

    <Cart ></Cart>
    </div> */}
    {/* <SeverCall /> */}
    {/* <Form /> */}
    {/* <ClassExample title='welcome'/> */}

    <BrowserRouter>
      <Link to='/'>Home</Link>
      <Link to='/about'>About t</Link>
      <Link to='/contact'>Contact</Link>
      <Routes>
        <Route path="/" element={<SeverCall />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </>

}
export default App