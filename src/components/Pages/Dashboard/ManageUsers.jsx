import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useState } from "react";

const ManageUsers = () => {

  const [isAdminDisable, setIsAdminDisable] = useState(false)
  const [isInstructorDisable, setIsInstructorDisable] = useState(false)

  const [axiosSecure] = UseAxiosSecure()
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  console.log(users)
  const handleMakeAdmin= user=>{
    setIsAdminDisable(true)
        fetch(`https://assignment-twelve-server-pearl.vercel.app/users/admin/${user._id}`,{
                method:'PATCH'
        })
        .then(res=> res.json())
        .then(data=> {
                if(data.modifiedCount){
                        refetch()
                        Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: `${user.name} is an admin now!`,
                                showConfirmButton: false,
                                timer: 1500
                              })
                }
        })
  }

  const handleMakeInstructor = user=>{
    setIsInstructorDisable(true)
    fetch(`https://assignment-twelve-server-pearl.vercel.app/users/instructor/${user._id}`,{
                method:'PATCH'
        })
        .then(res=> res.json())
        .then(data=> {
                if(data.modifiedCount){
                        refetch()
                        Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: `${user.name} is an instructor now!`,
                                showConfirmButton: false,
                                timer: 1500
                              })
                }
        })
  }

  const handleDelete = user =>{

  }
  return (
    <div className="w-full">
      <h1>manageusers {users.length}</h1>
      <div className="overflow-x-auto  w-3/4 mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role === 'admin'? 'admin': <button onClick={() => handleMakeAdmin(user)} className="btn btn-secondary text-white" disabled={isAdminDisable}>Make admin</button>}
                
                </td>
                <td>{user.role === 'instructor'? 'instructor': <button onClick={() => handleMakeInstructor(user)} className="btn btn-secondary text-white" disabled={isInstructorDisable}>Make instructor</button>}
                
                </td>
                <td>
                <button onClick={() => handleDelete(users)} className="btn btn-accent text-gray-600"><FaTrashAlt/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
