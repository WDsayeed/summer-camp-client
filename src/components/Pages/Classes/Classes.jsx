import { useEffect, useState } from "react";
import ClassItem from "./ClassItem";
import useTitle from "../../../hooks/useTitle";

const Classes = () => {
  useTitle('Classes')
  const [classData, setClassData] = useState([]);
  useEffect(() => {
    fetch("https://assignment-twelve-server-pearl.vercel.app/popularclass")
      .then((res) => res.json())
      .then((data) => setClassData(data));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1>Classes</h1>
      <div className="grid md:grid-cols-3 gap-20">
        {classData.map((data) => (
          <ClassItem key={data._id} data={data}></ClassItem>
        ))}
      </div>
    </div>
  );
};

export default Classes;
