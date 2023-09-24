import React from 'react';
import '../style211.css';
import admit from "../admirt.jpg"
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
function OtpVerification() {

  const navigate = useNavigate();

  const otpGenerator = ()=>{
    const arr = [1,2,3,4,5,6,7,8,9,0];
    let str = "";
    for(let i = 0;i < 4;i++){
      str += (arr[Math.floor(Math.random() * 10)]);
    }
    return str;
  }
  return (
    <div className="container">
      <img className="img" src={admit} alt="" />
      <div className="wl">
        <br />
        <br />
        <br />
        <h2 className="wlc">Welcome Back</h2>
        <p className="pr">Please Sign in to your account with Mobile Number</p>
        <h1></h1>
        <p></p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <form className="otp-form" id="otp-form" onSubmit={(e) => {
          e.preventDefault();
          const number  = e.target[0].value;
          if(number.length != 10){
           return toast.error("The number should contain exactly 10 digit")
          }
          let check =false;
          for(let i = 0;i < 10;i++){
            if(number.charAt(i) < '0' || number.charAt(i) >'9'){
              toast.error("The Given input is not a valid phone number")
              check = true;
              break;
            }
          }
          if(check)return;
          const otp = otpGenerator();
          localStorage.setItem("otp",otp);
          toast.success(`Your Otp is ${otp}`);

          navigate(`/submit-otp/${number}`);
        }}>
        
          <div className="form-group" style={{display : "flex", flexDirection:"column"}}>
            <label htmlFor="phone-number" style={{display:"block"}}>Phone Number:</label>
            <input
            style={{display:"block"}}
              type="tel"
              id="phone-number"
              placeholder="(e.g) 9351234213"
              maxLength="10"
              required
            />
          </div>
         
          <button type="submit">Sign in with OTP</button>
        </form>
        <br />
        <br />
        <br />
        <p className="lst">
          we will send you a one-time SMS message <br /> Charges may apply
        </p>
      </div>
    </div>
  );
}

export default OtpVerification;