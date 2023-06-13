import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
       
        const {id} = useParams()
        // console.log(id)
        return (
                <div className="w-full">
                       <h1>teka teka de re</h1> 

                       <Elements stripe={stripePromise}>
                        <CheckoutForm id={id}></CheckoutForm>
                       </Elements>
                </div>
        );
};

export default Payment;