import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useSelectedClass from "../../../../hooks/useSelectedClass";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import { AuthContext } from "../../../provider/AuthProvider";
import './CheckoutForm.css'

const CheckoutForm = ({ id }) => {
  // console.log(id);
  const stripe = useStripe();
  const elements = useElements();
  const [selectedClass] = useSelectedClass();
  const [axiosSecure] = UseAxiosSecure();
  const { user } = useContext(AuthContext);
  const [cardError, setCardError] = useState("");
  const [selectedData, setSelectedData] = useState({});
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    fetch(`https://assignment-twelve-server-pearl.vercel.app/classadd/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        setSelectedData(data);
      });
  }, [id]);

  const { price } = selectedData;

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [id, price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }

    console.log(paymentIntent);

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
     
      const payment = {
        email:user?.email,
        transactionId:paymentIntent.id,
        price,
        date: new Date(),
        orderStatus: 'service pending',
        items: selectedData._id,
        classItem: selectedData.classId,
        itemName: selectedData.name,
        itemPhoto: selectedData.photo
        }

        axiosSecure.post('/payments', payment)
        .then(res=>{
          console.log(res.data)
          if(res.data.insertResult.insertedId){
            // display confirm
          }
        })
    }
  };

  return (
    <>
      <form className="w-2/3 mx-auto" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 text-center">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500 text-center">
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
