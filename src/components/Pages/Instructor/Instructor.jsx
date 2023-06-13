import { useEffect, useState } from "react";
import InstructorItems from "./InstructorItems";
import useTitle from "../../../hooks/useTitle";

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);
  useTitle('Instructor')

  useEffect(() => {
    fetch("https://assignment-twelve-server-pearl.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div>
      <h1>Instructor</h1>
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-20">
        {
                instructors.map(instructor=> <InstructorItems
                key={instructor._id}
                instructor={instructor}
                ></InstructorItems>)
        }
      </div>
    </div>
  );
};

export default Instructor;