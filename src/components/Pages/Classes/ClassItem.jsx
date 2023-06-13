import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useSelectedClass from "../../../hooks/UseSelectedClass";


const ClassItem = ({ data }) => {
  const { photo, name, instructor,price, seat, _id } = data;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useSelectedClass()
  const [isDisable, setIsDisable] = useState(false)

  const handleEnroll = ({data}) => {
    setIsDisable(true)
    if(user.role === 'admin' || user.role==='instructor'){
      
    }
    const savedData = {
      classId: _id,
      name,
      instructor,
      photo,
      price,
      seat,
      email: user?.email,
    };
    if (user && user?.email) {
      fetch("https://assignment-twelve-server-pearl.vercel.app/classadd", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch()
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your Course has been selected",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to enroll the course",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", {state: {from:location}});
        }
      });
    }
  };
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure className="h-[260px]">
        <img className="h-full w-full" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Instructor name: {instructor}</p>
        <p>Available seats: {seat}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleEnroll(data)}
            className="btn btn-primary"
            disabled={isDisable}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassItem;
