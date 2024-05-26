import React, { useState } from "react";
import OtpInput from "./otp-input";
const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();

    //phone validations
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }

    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("Login Successful", otp);
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center font-medium text-lg ">Login with Phone</h1>
      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit} className="flex my-4">
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
            className="border border-black rounded-l-md px-2 py-1"
          />
          <button type="submit" className="border border-black px-2 rounded-r-md">Submit</button>
        </form>
      ) : (
        <div className="flex flex-col items-center">
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneOtpForm;
