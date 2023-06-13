import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const EnrolledClass = () => {
  const { user } = useContext(AuthContext);
  const [enrollClass, setEnrollClass] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/paymentHistory/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setEnrollClass(data);
      });
  }, [user]);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {enrollClass.map((cls, index) => (
            <tr key={cls._id}>
              <th>
                {index+1}
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={cls.photo}
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{cls.itemName}</div>
                    
                  </div>
                </div>
              </td>
              <td>
                {cls.email}
              </td>
              <td>{cls.price}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrolledClass;
