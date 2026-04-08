import { useState,useEffect} from 'react'
import './GetFormData.css'
import axios from 'axios';
import dayjs from "dayjs";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { Link } from 'react-router-dom';


function GetFormData({ activeTab }) {
  const [data, setData] = useState([]);

  async function SubmitForm() {
    try {
      const response = await axios.get("http://localhost:4002/api/expenseget");
      setData(response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    SubmitForm();
  }, []);

  async function DeleteCard(id) {
    try {
      await axios.delete(`http://localhost:4002/api/expensedelete/${id}`);
      SubmitForm();
      toast.success("Expense Deleted Successfully");
    } catch (error) {
      toast.error("Expense Delete Failed");
    }
  }

  // ✅ FILTER LOGIC
  const filteredData =
    activeTab === "All"
      ? data
      : data.filter((item) => item.category === activeTab);

  return (
    <div>
      <div className="form-actual-data1">
        {filteredData.map((x, index) => {
          const dateOnly = dayjs(x.date).format("DD/MM/YYYY");

          return (
            <div className="form-actual-data" key={index}>
              <div className="form-title"><h5>{x.title}</h5></div>
              <div className="form-category"><h5>{x.category}</h5></div>
              <div className="form-amount"><h5>₹{x.amount}</h5></div>
              <div className="form-date"><h5>{dateOnly}</h5></div>
              <div className="form-actions">
                <Link to={`/editcard/${x._id}`}>
                  <button className="edit-btn"><MdModeEdit /></button>
                </Link>
                <button className="delete-btn" onClick={() => DeleteCard(x._id)}>
                  <MdDelete />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GetFormData
