import React, { useState, useEffect } from 'react'
import submit from "../submitimage.jpg";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';


const SubmitOtp = () => {
    const navigate = useNavigate();
    const [first,setFirst] = useState("");
    const [second,setSecond] = useState("");
    const [third,setThird] = useState("");
    const [fourth,setFourth] = useState("");
    const {number} = useParams();

   

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
    <img className="img" src={submit} alt="" />
    <div className="wl">
   
      <h2 className="wlc">Please verify your Number</h2>
      <br />
      <p className="pr">An OTP is sent to +91{number}</p>
      <p className="pr1" style={{cursor:"pointer"}} onClick={() => navigate("/")}>Change phone number</p>
      <br />
      <br />
      <br />
      {/* OTP Input Fields */}
      <form className="otp-form" onSubmit={(e) => {
        e.preventDefault();
        const str = first+second+third+fourth;
        const wantedOtp = localStorage.getItem("otp");
        if(wantedOtp !== str){
            toast.error("Invalid Otp");
        }
        else{
            localStorage.removeItem("otp");
            toast.success("Successfully logged in");
            navigate("/success");

        }
      }}>
        <div className="form-group">
          <input type="text" maxLength="1" pattern="[0-9]" placeholder="" required value={first} onChange={(e) => setFirst(e.target.value)} />
          <input type="text" maxLength="1" pattern="[0-9]" placeholder="" required value={second} onChange={(e) => setSecond(e.target.value)}/>
          <input type="text" maxLength="1" pattern="[0-9]" placeholder="" required value={third} onChange={(e) => setThird(e.target.value)} />
          <input type="text" maxLength="1" pattern="[0-9]" placeholder="" required value={fourth} onChange={(e) => setFourth(e.target.value)} />
        </div>
      <button type="submit">Verify</button>
      </form>
    </div>
    <p className="lst">Didn't receive the code <span className="lst21" style={{cursor:"pointer"}} onClick={() => {
          const otp = otpGenerator();
          localStorage.setItem("otp",otp);
          toast.success(`Your Otp is ${otp}`);

    }}>Resend.</span></p>
  </div>
  )
}

export default SubmitOtp