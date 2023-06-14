// import { useForm } from "react-hook-form";

import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useContext(AuthContext);

  const handleAddClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const instructor = form.instructorName.value;
    const email = form.email.value;
    const seat = form.seat.value;
    const price = form.price.value;

    const classItems = {
      photo,
      name,
      instructor,
      email,
      price,
      seat,
      status:'pending'
    };
    console.log(classItems);

    fetch("https://assignment-twelve-server-pearl.vercel.app/addClass", {
      method: "Post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(classItems),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          form.reset()
          Swal.fire({
            title: "success!",
            text: "Class Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <form className="md:container w-3/4 mx-auto my-10" onSubmit={handleAddClass}>
      <h1 className="text-4xl text-center">
        Add a Course
      </h1>
      <div className="card-body grid md:grid-cols-2 gap-10">
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-semibold">Course Name:</span>
          </label>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control ">
          <label className="label">
            <span className="label-text font-semibold">Course Image:</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="image URL of the course"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control ">
          <label className="label">
            <span className="label-text font-semibold">Instructor Name:</span>
          </label>
          <input
            type="text"
            name="instructorName"
            defaultValue={user?.displayName}
            readOnly
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-semibold">Instructor Email:</span>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            readOnly
            placeholder="instructor email"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-semibold">Available seats:</span>
          </label>
          <input
            type="number"
            name="seat"
            placeholder="seat"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-semibold">Price:</span>
          </label>
          <input
            type="number"
            name="price"
            placeholder="price"
            className="input input-bordered w-full"
          />
        </div>
      </div>
      <div className="text-center w-full ">
        <button className="btn btn-wide btn-success">
          add course
        </button>
      </div>
    </form>
  );
};

export default AddClass;
