import "./ToatlExpnese.css"
import { RiMoneyRupeeCircleFill } from "react-icons/ri";


function ToatlExpnese() {
  return (
    <div>
      <div className="toatlexpnesecard">
        <div className="money-icon">

        </div>
        <div className="money-txt">
            <h3>Total Expnese:</h3>
           <h2 className="amount">
  <RiMoneyRupeeCircleFill className="rupee" />
  12,000
</h2>

        </div>
      </div>
    </div>
  )
}

export default ToatlExpnese
