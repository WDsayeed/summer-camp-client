import { useState } from "react";
import Swal from "sweetalert2";
import FeedBack from "./FeedBack/FeedBack";

const Manageclasses = () => {
  const [classes, setClasses] = useState([]);
  const [isDisable, setDisable] = useState(false);

  fetch("https://assignment-twelve-server-pearl.vercel.app/manageClasses")
    .then((res) => res.json())
    .then((data) => {
      setClasses(data);
    });

  const handleApprove = (cls) => {
    if (cls._id) {
      setDisable(true);
    }

    fetch(`https://assignment-twelve-server-pearl.vercel.app/approveStatus/${cls._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `Approved!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDeny = (cls) => {
    if (cls._id) {
      setDisable(true);
    }

    fetch(`https://assignment-twelve-server-pearl.vercel.app/denyStatus/${cls._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `Denied!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

//   const handleFeedback = () => {};
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className=" text-lg">
            <th>#</th>
            <th>Course Name</th>
            <th>Instructor Name</th>
            <th className="text-center">Email</th>
            <th>Available seats</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((cls, index) => (
            <tr key={cls._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={cls.photo} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{cls.name}</div>
                  </div>
                </div>
              </td>
              <td className="text-center">{cls.instructor}</td>
              <td>{cls.email}</td>
              <td className="text-center">{cls.seat}</td>
              <td className="text-end">${cls.price}</td>
              <td>{cls.status}</td>
              <td>
                <button
                  onClick={() => handleApprove(cls)}
                  className="btn btn-success btn-xs"
                  disabled={isDisable}
                >
                  Approved
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDeny(cls)}
                  className="btn btn-info btn-xs"
                  disabled={isDisable}
                >
                  Deny
                </button>
              </td>
              <td>
                <button
                  onClick={() => window.my_modal_5.showModal(cls._id)}
                  className="btn btn-warning btn-xs"
                >
                  Feedback
                </button>
                <FeedBack
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                      Press ESC key or click the button below to close
                    </p>
                    <div className="modal-action">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </div>
                  </form>
                </FeedBack>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Manageclasses;
