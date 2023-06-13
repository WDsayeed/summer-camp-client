import { useEffect, useState } from "react";
import ClassData from "./ClassData";

const ClassSection = () => {
  const [classData, setClassData] = useState([]);
  useEffect(() => {
    fetch("https://assignment-twelve-server-pearl.vercel.app/popularclass")
      .then((res) => res.json())
      .then((data) => setClassData(data));
  }, []);
  return (
    <div className=" mt-64">
      <h1>top class</h1>
      <div className="grid md:grid-cols-3 gap-32">
      {classData.map((clsData) => <ClassData
      key={clsData._id}
      clsData={clsData}
      ></ClassData>)}
      </div>
    </div>
  );
};

export default ClassSection;
