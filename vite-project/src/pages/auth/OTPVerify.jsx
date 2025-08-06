import React, {useState} from "react"
import { Link } from 'react-router-dom';

export default function OTPVerify(){
  const [otp, setOtp] = useState(new Array(6).fill(""))

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // move to the next input if value is entered
    if (element.nextSibling && element.value){
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) =>  {
    e.preventDefault();
    alert(`Enter OTP is ${otp.join("")}`);
  };

  return(
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">
        <div className="text-center mb-6">
          <img
            src="/vote3.png"
            alt="voting logo"
            className="mx-auto h-14 mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">
            Verify Your Account
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Enter the 6-digit code sent to your email
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex justify-between gap-2 mb-6">
            {otp.map((data, index) =>(
              <input
                key={index}
                type="text"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                className="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-lg focus:outline-none focus;ring-2 focus:ring-indigo-500"
              />
            ))}
          </div>
          
          <Link
          to ="/auth/login"
          className="w-full bg-indigo-600 text-white text-center py-3 rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold"
          >
            Verify OTP 
          </Link>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-600 text-sm">
            Didn't receive the code {""}
            <button className="text-indigo-600 hover:underline">
              Resend OTP
            </button>
          </p>
          <p className=" text-gray-600  text-sm">
            <a href="/login" className="text-indigo-600 hover:underline">
              Back to Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

