import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SignUp = () => {

    let[username,setUsername]=useState("")
    let[email,setEmail]=useState("")
    let[phone,setPhone] = useState("")
    let[password,setPassword] = useState("")
    let[loading,setLoading] = useState("")
    let[success,setSuccess] = useState("")
    let[error,setError] = useState("")

    const submit = async(e)=>{
        e.preventDefault()

        try {
            setLoading("Please wait as we submit..")
            setSuccess("")
            setError("")

            const data = new FormData();
            data.append("username",username);
            data.append("email",email);
            data.append("phone",phone);
            data.append("password",password);

            const response = await axios.post("https://tresy.pythonanywhere.com/api/signup",data)
            console.log(response)
            setLoading("")
            setSuccess(response.data.message)
                

                // setUsername("")
                // setEmail("")
                // setPhone("")
                // setPassword("")
                
        } catch (error) {
            console.log(error)
            setLoading("")
            setError(error.message)
            
        }


    }

    return ( 
        <div className="row justify-content-center mt-4">
           <div className="col-md-6 card shadow p-4 ">
                <h2 className="text-center">Sign Up</h2> <br />
                <b className="text-warning">{loading}</b>
                <b className="text-success">{success}</b>
                <b className="text-danger">{error}</b>
                <div className="signup-container">
                <form onSubmit={submit}>
                    <input  type="text" className="form-control" placeholder="enter your name" 
                    required onChange={(e)=>setUsername(e.target.value)}/> <br></br>

                    <input type="email" className="form-control" placeholder="Enter your Email" 
                    required onChange={(e)=>setEmail(e.target.value)}/> <br></br>

                    <input  type="tel" className="form-control" placeholder="Enter your phone number" 
                    required onChange={(e)=>setPhone(e.target.value)}/> <br></br>

                    <input  type="password" className="form-control" placeholder="Enter your password" 
                    required onChange={(e)=>setPassword(e.target.value)}/> <br></br>

                    <button type="submit" className="btn btn-primary " >Sign up</button>

                </form>
                </div>

           </div>
        </div>
    );
}
 
export default SignUp;