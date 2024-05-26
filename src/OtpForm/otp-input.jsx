import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (event, index) => {
    const value = event.target.value;
    if (isNaN(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    const combinedOtp = newOtp.join("");
    console.log(newOtp, combinedOtp);
    if (combinedOtp.length === length) {
      onOtpSubmit(combinedOtp);
    }

    //move to next input if current field is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
  };

  const isOtpValid = () => {
    const index = otp.indexOf("");
    if(index === -1) return false;
    return true;
  }

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      //moving focus to the previous input field on backspace
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
  return (
    <div className="my-2">
      <div className="flex gap-2">
        {otp.map((value, index) => {
          return (
            <input
              key={index}
              type="text"
              value={value}
              ref={(input) => (inputRefs.current[index] = input)}
              onClick={(e) => handleClick(index)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="border p-1 rounded-md w-10 border-black text-xl text-center"
            />
          );
        })}
      </div>

      <button disabled={isOtpValid()} className="bg-blue-600 disabled:bg-blue-400 transition-colors py-2 rounded-md w-full mt-4 text-white">Submit</button>
    </div>
  );
};

export default OtpInput;
