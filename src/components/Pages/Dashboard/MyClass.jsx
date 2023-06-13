import { useEffect, useState } from "react";
import useInstructorClass from "../../../hooks/useInstructorClass";

const MyClass = () => {
  const [instructorClass] = useInstructorClass();
 const [totalStudent, setTotalStudent] = useState({})

  useEffect(()=>{
    fetch('https://assignment-twelve-server-pearl.vercel.app/enrolled')
    .then(res=> res.json())
    .then(data=>{
    console.log(data)
    setTotalStudent(data)
    })
  },[])
  return (
    <div className="overflow-x-auto">

      
      <div>
        total student:{}
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              #
            </th>
            
            <th className="text-end">Name</th>
            <th>Status</th>
            <th>Total enrolled</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {instructorClass.map((cls,index) => (
            <tr key={cls._id}>
              <th>
                {index + 1}
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={cls?.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{cls?.name}</div>
                  </div>
                </div>
              </td>
              <td>
              {cls?.status}
              </td>
              <td></td>
              <td>
                <button className="btn btn-accent btn-xs">Feedback</button>
              </td>
              <td>
                <button className="btn btn-accent btn-xs">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClass;
