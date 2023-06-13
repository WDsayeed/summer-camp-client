import { useContext } from "react"
import { AuthContext } from "../components/provider/AuthProvider"
import UseAxiosSecure from "./UseAxiosSecure"
import { useQuery } from "@tanstack/react-query"

const useInstructorClass = ()=>{
        const {user, loading} = useContext(AuthContext)
        const [axiosSecure] = UseAxiosSecure()

        const { refetch, data: instructorClass = [] } = useQuery({
                queryKey: ['instructorClass', user?.email],
                enabled: !loading,
        
                queryFn: async ()=>{
                        const res = await axiosSecure(`/addClass?email=${user?.email}`)
                        console.log(res.data)
                        return res.data
                },
              })
              return [instructorClass, refetch]
}
export default useInstructorClass;