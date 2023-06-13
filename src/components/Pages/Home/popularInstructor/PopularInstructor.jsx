import { useEffect, useState } from "react";
import InstructorData from "./instructorData";

const PopularInstructor = () => {

        const [ instructors, setInstructors] = useState([])

        useEffect(()=>{
                fetch('https://assignment-twelve-server-pearl.vercel.app/instructors')
                .then(res=> res.json())
                .then(data=> setInstructors(data))
        },[])
        return (
                <div>
                        <h1 className="text-4xl text-center">Instructors</h1>
                      <div className="grid md:grid-cols-3 gap-28">
                      {
                        instructors.map(instructor=> <InstructorData
                        key={instructor._id}
                        instructor={instructor}
                        ></InstructorData>)
                       } 
                      </div>
                </div>
        );
};

export default PopularInstructor;