import HeroForm from './HeroForm/HeroForm';
import  './HeroSection.css'
import { GiTakeMyMoney } from "react-icons/gi";
import ToatlExpnese from './ToatlExpnese/ToatlExpnese';
import ExpenseList from '../ExpenseList/ExpenseList';


function HeroSection() {
  return (
    <div>
        <div className="main-title"><h1><span><GiTakeMyMoney /></span>Expense Tracker</h1></div>
      <div className="main-head">
        <div className="main-head-left">
          <h2>Add New Expense</h2>
        <div className="underlined"></div>
        <HeroForm/>
        </div>
        <div className="main-head-right">
          <ToatlExpnese/>
        </div>
      </div>
   
   <ExpenseList/>

    </div>
  )
}

export default HeroSection
