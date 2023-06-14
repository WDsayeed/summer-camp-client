import { useEffect, useState } from "react";
import InstructorData from "./instructorData";

const PopularInstructor = () => {

        const [ instructors, setInstructors] = useState([])

        useEffect(()=>{      
        
                fetch('https://assignment-twelve-server-pearl.vercel.app/allInstructors')
                .then(res=> res.json())
                .then(data=> {
                        setInstructors(data)
                })
        
        },[])
        return (
                <div className="mt-20">
                        <h1 className="text-4xl text-center mb-7">Popular Instructors</h1>
                      <div className="grid md:grid-cols-3 gap-10">
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