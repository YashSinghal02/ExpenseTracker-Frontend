import "./TabSwitch.css";

function TabSwitch({ activeTab, setActiveTab }) {
  return (
    <div className="w-full pt-8">
      <div className="tab-grid grid gap-6 justify-items-center mx-auto max-w-6xl">

        <div
          className={`first-Categories ${activeTab === "All" ? "active" : ""}`}
          onClick={() => setActiveTab("All")}
        >
          All
        </div>

        <div
          className={`first-Categories ${activeTab === "Food" ? "active" : ""}`}
          onClick={() => setActiveTab("Food")}
        >
          Food
        </div>

        <div
          className={`first-Categories ${activeTab === "Utilities" ? "active" : ""}`}
          onClick={() => setActiveTab("Utilities")}
        >
          Utilities
        </div>

        <div
          className={`first-Categories ${activeTab === "Entertainment" ? "active" : ""}`}
          onClick={() => setActiveTab("Entertainment")}
        >
          Entertainment
        </div>

      </div>
    </div>
  );
}

export default TabSwitch;