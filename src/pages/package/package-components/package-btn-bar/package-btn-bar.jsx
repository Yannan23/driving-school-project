import { useState } from "react";
import "./package-btn-bar.css";
import LessonsTab from "../package-cards/package-cards";
import PackageTab from "../package-cards/package-cards-package";
import DriveTestTab from "../package-cards/package-cards-drivetest";

const PackageBtnBar = () => {
  const [activeTab, setActiveTab] = useState("lessons");

  return (
    <div>
      <div className="package-btn-bar-box">
        <button
          className={`package-btn-bar-btn ${activeTab === "lessons" ? "package-btn-bar-btn-selected" : ""}`}
          onClick={() => setActiveTab("lessons")}
        >
          LESSON
        </button>

        <button
          className={`package-btn-bar-btn ${activeTab === "package" ? "package-btn-bar-btn-selected" : ""}`}
          onClick={() => setActiveTab("package")}
        >
          PACKAGE
        </button>

        <button
          className={`package-btn-bar-btn ${activeTab === "drive-test" ? "package-btn-bar-btn-selected" : ""}`}
          onClick={() => setActiveTab("drive-test")}
        >
          DRIVE TEST
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "lessons" && <LessonsTab />}
        {activeTab === "package" && <PackageTab />}
        {activeTab === "drive-test" && <DriveTestTab />}
      </div>
    </div>
  );
};

export default PackageBtnBar;
