
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../ContextApi/TokenApi';

const Payment = () => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolderName: '',
  });

  const {storeTokenInLS } = useAuth();
  const { clearCart } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://grocery-backend-delta.vercel.app/auth/payment", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
  
        },
        body: JSON.stringify(paymentData),
      });

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.success) {
          toast.success(responseData.message);
          storeTokenInLS(responseData.token)
          clearCart();
          navigate('/');
        } else {
          toast.error(responseData.msg || 'Payment failed');
        }
      } else {
        toast.error('Payment failed');
        console.error("API payment Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      toast.error('Payment failed');
    }
  };

  return (
    <section>
      <div className="paymentContainer">
        <div className="paymentBox">
          <img src="https://icons.veryicon.com/png/Business/Business/Credit%20cards.png" alt="cardimg" 
             width="500"
              height="400"
          />
        </div>
        <div className="paymentBox">
          <div className="paymentForm">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="cardNumber">Card Number:</label>
                <br />
                <input
                  type="text"
                  name="cardNumber"
                  value={paymentData.cardNumber}
                  onChange={handleChange}
                  placeholder="Card Number"
                />
              </div>
              <div>
                <label htmlFor="expiryDate">Expiry Date:</label>
                <br />
                <input
                  type="text"
                  name="expiryDate"
                  value={paymentData.expiryDate}
                  onChange={handleChange}
                  placeholder="Expiry Date"
                />
              </div>
              <div>
                <label htmlFor="cvv">CVV:</label>
                <br />
                <input
                  type="text"
                  name="cvv"
                  value={paymentData.cvv}
                  onChange={handleChange}
                  placeholder="CVV"
                />
              </div>
              <div>
                <label htmlFor="cardHolderName">Card Holder Name:</label>
                <br />
                <input
                  type="text"
                  name="cardHolderName"
                  value={paymentData.cardHolderName}
                  onChange={handleChange}
                  placeholder="Card Holder Name"
                />
              </div>
              <br />
              <button type="submit" className="btn btn-submit">
                Pay Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;





// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../ContextApi/TokenApi';

// const Payment = () => {
//   const [paymentData, setPaymentData] = useState({
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//     cardHolderName: '',
//   });

//   const { token,storeTokenInLS, clearCart } = useAuth();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPaymentData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch("http://localhost:5000/api/auth/payment", {
// //         method: 'POST',
// //         headers: {
// //           "Content-Type": "application/json",
// //           "Authorization": `Bearer ${localStorage.getItem('token')}`
// //         },
// //         body: JSON.stringify(paymentData),
// //       });
// // console.log("respnsedata", response)
// //       if (response.ok) {
// //         const responseData = await response.json();
// //         if (responseData.token) {
// //           storeTokenInLS(responseData.token);
// //           toast.success(responseData.msg);
// //           clearCart();
// //           navigate('/');
// //         } else {
// //           toast.error('Token not received from server');
// //         }
// //       } else {
// //         toast.error('Payment failed');
// //         console.error("API payment Error:", response.status, response.statusText);
// //       }
// //     } catch (error) {
// //       console.error('Error processing payment:', error);
// //       toast.error('Payment failed');
// //     }
// //   };
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await fetch("http://localhost:5000/api/auth/payment", {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${token}` // Use token from context API
//       },
//       body: JSON.stringify(paymentData),
//     });
// console.log("RESPONSEE", response)
//     if (response.ok) {
//       const responseData = await response.json();
//       console.log("response data baceeknd se", responseData)
//       if (responseData.token) {
//         storeTokenInLS(responseData.token);
//         toast.success(responseData.msg);
//         clearCart();
//         navigate('/');
//       } else {
//         toast.error('Token not received from server');
//       }
//     } else {
//       toast.error('Payment failed');
//       console.error("API payment Error:", response.status, response.statusText);
//     }
//   } catch (error) {
//     console.error('Error processing payment:', error);
//     toast.error('Payment failed');
//   }
// };
//   return (
//     <section>
//       <div className="paymentContainer">
//         <div className="paymentBox">
//           <img src="https://icons.veryicon.com/png/Business/Business/Credit%20cards.png" alt="cardimg" 
//                width="500"
//                height="400"
//           />
//         </div>
//         <div className="paymentBox">
//           <div className="paymentForm">
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="cardNumber">Card Number:</label><br />
//                 <input
//                   type="text"
//                   name="cardNumber"
//                   value={paymentData.cardNumber}
//                   onChange={handleChange}
//                   placeholder="Card Number"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="expiryDate">Expiry Date:</label><br />
//                 <input
//                   type="text"
//                   name="expiryDate"
//                   value={paymentData.expiryDate}
//                   onChange={handleChange}
//                   placeholder="Expiry Date"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="cvv">CVV:</label><br />
//                 <input
//                   type="text"
//                   name="cvv"
//                   value={paymentData.cvv}
//                   onChange={handleChange}
//                   placeholder="CVV"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="cardHolderName">Card Holder Name:</label><br />
//                 <input
//                   type="text"
//                   name="cardHolderName"
//                   value={paymentData.cardHolderName}
//                   onChange={handleChange}
//                   placeholder="Card Holder Name"
//                 />
//               </div>
//               <br />
//               <button type="submit" className="btn btn-submit">
//                 Pay Now
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Payment;
