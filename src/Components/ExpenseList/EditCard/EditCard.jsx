import { useState, useEffect } from "react";
import "./EditCard.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";

function EditCard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  /* ======================
     GET DATA BY ID
  ====================== */
  useEffect(() => {
    const getDataById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4002/api/expenseget/${id}`
        );
console.log(response.data)
        const expense = response.data.data;

        setData({
          title: expense.title,
          amount: expense.amount,
          category: expense.category,
          // ✅ FIX date format
          date: dayjs(expense.date).format("YYYY-MM-DD"),
        });
      } catch (error) {
        console.log("Get Data By ID Error", error);
        toast.error("Failed to load expense");
      }
    };

    if (id) getDataById();
  }, [id]);

  /* ======================
     UPDATE DATA
  ====================== */
  const editDataById = async (e) => {
    e.preventDefault();

    try {
      await axios.put(   // ✅ PUT not POST
        `http://localhost:4002/api/expenseedit/${id}`,
        data
      );

      toast.success("Expense Updated Successfully");
      navigate("/");
    } catch (error) {
      console.log("Edit Data By ID Error", error);
      toast.error("Update Failed");
    }
  };

  return (
    <div className="edit-main">
      <div className="edit-container">
        <form className="edit-form" onSubmit={editDataById}>
          <h2>Edit Expense</h2>

          <label>Title</label>
          <input
            type="text"
            value={data.title}
            onChange={(e) =>
              setData({ ...data, title: e.target.value })
            }
            required
          />

          <label>Amount</label>
          <input
            type="number"
            value={data.amount}
            onChange={(e) =>
              setData({ ...data, amount: e.target.value })
            }
            required
          />

          <label>Category</label>
          <select
            value={data.category}
            onChange={(e) =>
              setData({ ...data, category: e.target.value })
            }
            required
          >
            <option value="">-- Select --</option>
            <option>Food</option>
            <option>Transport</option>
            <option>Entertainment</option>
            <option>Utilities</option>
          </select>

          <label>Date</label>
          <input
            type="date"
            value={data.date}
            onChange={(e) =>
              setData({ ...data, date: e.target.value })
            }
            required
          />

          <button type="submit">Update Expense</button>
        </form>
      </div>
    </div>
  );
}

export default EditCard;
