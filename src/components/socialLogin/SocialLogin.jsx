import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
        const {googleLogIn} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/'

  const handleGoogleLogin = ()=> {
        googleLogIn()
    .then(result=>{
      const loggedUser = result.user 
      console.log(loggedUser)
      const saveUser = {name: loggedUser.displayName, email: loggedUser.email}
      fetch('https://assignment-twelve-server-pearl.vercel.app/users',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(saveUser)
      })
      .then(res=> res.json())
      .then(()=> {
          navigate(from, {replace:true}) 
      })
    

    })
    .catch(error=> console.log(error))
  }
        return (
                <div className="w-full flex items-center justify-center mb-3">
                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline flex items-center justify-center">
                   
                     <FaGoogle></FaGoogle>
                  
                 </button>
                </div>
        );
};

export default SocialLogin;