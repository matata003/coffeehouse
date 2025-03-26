import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem("user");

        const checkUser = () => {
            if (!user) {
                localStorage.clear();
                // return navigate("/signin");
            }
        };

    useEffect(() => {
        checkUser();
    }, []);

    let[product_name,setProduct_name] = useState("")
    let[product_desc,setProduct_desc] = useState("")
    let[product_cost,setProduct_cost] = useState("")
    let[product_photo,setProduct_photo] = useState("")

    let[loading,setLoading]=useState("")
    let[success,setSuccess]=useState("")
    let[error,setError]=useState("")
    let[category, setCategory] = useState("")

    const fileInputRef = useRef(null);

    const submitForm =async(e)=>{
        e.preventDefault();
        try {
            setLoading("Please wait while we submit your data");
            setSuccess("");
            setError("");
            

            const data = new FormData();
            data.append("product_name",product_name)
            data.append("product_desc",product_desc)
            data.append("product_cost",product_cost)
            data.append("product_photo",product_photo)
            data.append("category", category);

            const response = await axios.post("https://tresy.pythonanywhere.com/api/addproduct",data)
            // setLoading("");
            // setSuccess(response.data.success);

            // setProduct_name("")
            // setProduct_desc("")
            // setProduct_cost("")
            // setProduct_photo("")
            setSuccess("Product added successfully!");
            setLoading("");
            setProduct_name("");
            setProduct_desc("");
            setProduct_cost("");
            setProduct_photo(null);
            setCategory(""); // Clear category input

            // Removed: setError("Failed to add product.");
            setLoading("");
        } catch (error) {
            // setLoading("")
            // setError(error.message)
            setError("Something went wrong. Try again.");
            setLoading("");
            console.error(error);


            
        }
   };
    
    return ( 
        <div className="row justify-content-center mt-4">
             <div className="col-md-6 card shadow p-4">
                <h2>add product</h2>
                <b className="text-warning">{loading}</b>
                <b className="text-success">{success}</b>
                <b className="text-danger">{error}</b>
            
                <form onSubmit={submitForm}>
                    <input value={product_name} type="text" className="form-control" placeholder="enter product name" 
                    required onChange={(e)=>setProduct_name(e.target.value)}/> <br />

                    <textarea value={product_desc} name="" id="" placeholder="enter product description" 
                    required onChange={(e)=>setProduct_desc(e.target.value)} className="form-control"></textarea> <br />

                    <input value={product_cost} type="number" className="form-control" placeholder="enter product cost" 
                    required onChange={(e)=>setProduct_cost(e.target.value)}/> <br />

                    <label htmlFor="">product photo</label>
                    <input type="file" className="form-control" 
                    required onChange={(e)=>setProduct_photo(e.target.files[0])}/> <br></br>

                    <input type="text" required placeholder="Enter Category"
                        className="form-control" value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />

                    <button className="btn btn-primary">Add product</button>

                </form>
            </div>
        </div>
     );
}
 
export default AddProduct;