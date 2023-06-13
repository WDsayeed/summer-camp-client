import { useContext } from "react";
import UseAxiosSecure from "./UseAxiosSecure";
import { AuthContext } from "../components/provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useInstructor=()=>{
        const { user } = useContext(AuthContext);
        const [axiosSecure] = UseAxiosSecure();
        // use axios secure with react hook
        const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
          queryKey: ["isInstructor", user.email],
          queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            console.log(res)
            return res.data.Instructor
          },
        });
        return [isInstructor, isInstructorLoading]
}
export default useInstructor;