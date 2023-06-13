import { useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
        const { user } = useContext(AuthContext);
        const [axiosSecure] = UseAxiosSecure();
        // use axios secure with react hook
        const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
          queryKey: ["isAdmin", user?.email],
          queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin
          },
        });
        return [isAdmin, isAdminLoading]
}
export default useAdmin;