import { useContext } from "react"
import { AuthContext } from "../components/provider/AuthProvider"
import UseAxiosSecure from "./UseAxiosSecure"
import { useQuery } from "@tanstack/react-query"

const useSelectedClass = () =>{
        const {user, loading} = useContext(AuthContext)
        const [axiosSecure] = UseAxiosSecure()

        const { refetch, data: selectedClass = [] } = useQuery({
                queryKey: ['selectedClass', user?.email],
                enabled: !loading,
        
                queryFn: async ()=>{
                        const res = await axiosSecure(`/classadd?email=${user?.email}`)
                        return res.data
                },
              })
              return [selectedClass, refetch]
}
export default useSelectedClass;