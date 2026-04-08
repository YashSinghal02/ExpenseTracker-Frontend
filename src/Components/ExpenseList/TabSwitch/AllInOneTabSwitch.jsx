// import { useState } from "react";
// import "./AllInOneTabSwitch.css";
// import All from "./All";
// import Food from "./Food";
// import Utilites from "./Utilites";
// import Entertainment from "./Entertainment";

// function AllInOneTabSwitch() {
//     const[activeTab,setActiveTab]=useState("All");

//     switch (activeTab) {
//         case "All":
//             <All/>
//             break;
//             case "Food":
//             <Food/>
//             break;
//             case "Utilites":
//             <Utilites/>
//             break;
//             case "Entertainment":
//             <Entertainment/>
//             break;
    
//         default:
//             break;
//     }
//   return (
//     <div  className="w-full py-8">
//       <div
//         className=" grid 
//           grid-cols-2
//           sm:grid-cols-3
//           md:grid-cols-3
//           [@media(min-width:992px)]:grid-cols-6
//           gap-6 
//           justify-items-center 
//           items-center 
//           mx-auto 
//           max-w-6xl"
//       >

//       <div
//         className={`first-Categories flex flex-col items-center justify-center ${activeTab === "All" ? "active" : ""}`}
//         onClick={() => setActiveTab("All")}
//       >
//       </div>

//  <div
//         className={`first-Categories flex flex-col items-center justify-center ${activeTab === "Food" ? "active" : ""}`}
//         onClick={() => setActiveTab("Food")}
//       >
//       </div>

//        <div
//         className={`first-Categories flex flex-col items-center justify-center ${activeTab === "Utilites" ? "active" : ""}`}
//         onClick={() => setActiveTab("Utilites")}
//       >
//       </div>

//        <div
//         className={`first-Categories flex flex-col items-center justify-center ${activeTab === "Entertainment" ? "active" : ""}`}
//         onClick={() => setActiveTab("Entertainment")}
//       >
//       </div>



//     </div>


//     </div>
//   );
// }

// export default AllInOneTabSwitch;
