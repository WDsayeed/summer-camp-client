import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const PaymentHistory = () => {

        const {user} = useContext(AuthContext)
  const [enrollClass, setEnrollClass] = useState([]);


        useEffect(()=>{
                fetch(`http://localhost:5000/paymentHistory/${user?.email}`)
                .then(res=> res.json())
                .then(data=>{
                        setEnrollClass(data)
                })
        },[user])
        return (
                <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>
                      #
                      </th>
                      <th className="text-end">Name</th>
                      
                      <th>Email</th>
                      <th>Price</th>
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
                                  src={cls.itemPhoto}
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
                        <td className="text-end">${cls.price}</td>
                  
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
        );
};

export default PaymentHistory;