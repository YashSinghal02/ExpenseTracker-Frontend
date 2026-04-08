import { useState } from "react";
import "./HeroForm.css";
import axios from "axios";
import { FiPlusCircle } from "react-icons/fi";


function HeroForm() {
    const[data ,setData]=useState({
        title:"",
        amount:"",
        category:"",
        date:"",

    })

 async function submitForm(e) {
    e.preventDefault();
    try {
        const response=await axios.post("http://localhost:4002/api/expensecreate",data)
        console.log(response.data);
        setData({
        title:"",
        amount:"",
        category:"",
        date:"",  
        })
    } catch (error) {
        console.log("Post Error",error)
    }
 }


  return (
    <div>
     <form onSubmit={submitForm} className="hero-form1">

  <div>
    <label>Title</label>
    <input type="text" value={data.title}
      onChange={(e)=>setData({...data,title:e.target.value})} required />
  </div>

  <div>
    <label>Amount</label>
    <input type="number" value={data.amount}
      onChange={(e)=>setData({...data,amount:e.target.value})} required />
  </div>

  <div>
    <label>Category</label>
    <select value={data.category}
      onChange={(e)=>setData({...data,category:e.target.value})} required>
      <option value="">-- Select --</option>
      <option>Food</option>
      <option>Transport</option>
      <option>Entertainment</option>
      <option>Utilities</option>
    </select>
  </div>

  <div>
    <label>Date</label>
    <input type="date"
      value={data.date}
      onChange={(e)=>setData({...data,date:e.target.value})} required />
  </div>

  <button id="submit-btn" type="submit">
    <FiPlusCircle /> Add Expense
  </button>
</form>

    </div>
  );
}

export default HeroForm;
