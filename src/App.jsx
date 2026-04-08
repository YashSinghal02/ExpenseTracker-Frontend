import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from './Components/heroComponent/HeroSection';
import ExpenseList from './Components/ExpenseList/ExpenseList';
import { Toaster } from "react-hot-toast";
import EditCard from './Components/ExpenseList/EditCard/EditCard';

function App() {


  return (
    <BrowserRouter>
     <Toaster position="top-right" />
    <Routes>
      <Route path='/' element={<HeroSection/>}/>
      <Route path='/expenselist' element={<ExpenseList/>}/>
      <Route path='/editcard/:id' element={<EditCard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
