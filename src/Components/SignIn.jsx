import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
    let[username,setUsername] = useState("")
    let[password,setPassword] = useState("")

    let[loading,setLoading] = useState("")
    let[error,setError] = useState("")

    let navigate = useNavigate("")

    const submitForm =async(e)=>{
        e.preventDefault();

        try {
            setError("")
            setLoading("Please wait...")

            const data = new FormData();
            data.append("username",username)
            data.append("password",password)
            
            const response = await axios.post("https://tresy.pythonanywhere.com/api/signin",data);
            
            if (response.data.user) {
                localStorage.setItem("user", JSON.stringify(response.data.user));
                navigate("/")
            } else {
                setLoading("")
                setError(response.data.Message)
            }
            
        } catch (error) {
            setLoading("")
            setError(error.message) 
        }
    }

    return ( 
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2 className="text-center"> Sign In</h2>

                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>
                
                <form onSubmit={submitForm}>
                    <input type="text" className="form-control" placeholder="Enter your username"
                     required onChange={(e)=>setUsername(e.target.value)}></input> <br />

                    <input type="password" className="form-control" placeholder="Enter your password"
                     required onChange={(e)=>setPassword(e.target.value)}></input> <br />

                     <button type="submit" className="btn btn-primary ">Sign in</button>

                     <p>Dont have an account?<Link to = "/SignUp">Sign Up</Link></p>

                </form>
            </div>
        </div>
     );
}
 
export default SignIn;