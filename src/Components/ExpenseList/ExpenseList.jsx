import { useState } from "react";
import "./ExpenseList.css";
import FormTitles from "./FromTitles/FormTitles";
import GetFormData from "./GetForms/GetFormData";
import TabSwitch from "./TabSwitch/TabSwitch";

function ExpenseList() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div>
      <div className="expenselist-head">
        
        <div className="expenselist-title">
          <h2>Expense List</h2>
          <div className="underlined2"></div>
        </div>

        {/* pass state */}
        <TabSwitch activeTab={activeTab} setActiveTab={setActiveTab} />

        <FormTitles />

        {/* pass activeTab here */}
        <GetFormData activeTab={activeTab} />
        
      </div>
    </div>
  );
}

export default ExpenseList;