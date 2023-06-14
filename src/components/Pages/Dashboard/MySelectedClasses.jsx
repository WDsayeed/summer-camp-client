import Swal from "sweetalert2";

import { FaTrashAlt } from "react-icons/fa";

import { Link } from "react-router-dom";
import useSelectedClass from "../../../hooks/UseSelectedClass";

const MySelectedClasses = () => {
  const [selectedClass, refetch] = useSelectedClass();
  console.log(selectedClass);

  const handleDelete = (data) => {
    Swal.fire({
      title: `Do you want to delete ${data.name}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-twelve-server-pearl.vercel.app/classadd/${data._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", `Your work has been deleted.`, "success");
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto w-3/4">
      <div className="w-full text-end"></div>
      <table className="table">
    
        <thead className="text-lg">
          <tr>
            <th>#</th>
            <th>Course Name</th>
            <th>Instructor Name</th>
            <th className="text-end">Price</th>
          </tr>
        </thead>
        <tbody>
          {selectedClass.map((clsData, index) => (
            <tr key={clsData._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={clsData.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{clsData.name}</div>
                  </div>
                </div>
              </td>
              <td className="text-center">{clsData.instructor}</td>
              <td className="text-end">${clsData.price}</td>
              <td>
                <Link to={`/dashboard/payment/${clsData._id}`}>
                  <button className=" btn btn-warning">Pay</button>
                </Link>
              </td>

              <td>
                <button
                  onClick={() => handleDelete(clsData)}
                  className="btn btn-accent text-gray-600"
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MySelectedClasses;
