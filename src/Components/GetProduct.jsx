import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "./Carousel";

const GetProduct = () => {
    
    let[products,setProducts] = useState([])
    let[error,setError] = useState("")
    let[loading,setLoading] = useState("")
    let[filteredProducts,setFilteredProducts] = useState([])

    const navigate = useNavigate();

    const img_url = "https://tresy.pythonanywhere.com/static/images/"

    const getProducts =async (e)=>{
        setError("")
        setLoading("Please wait,recieving products")
        try {
            const response = await axios.get("https://tresy.pythonanywhere.com/api/getproducts")
            setProducts(response.data)
            setFilteredProducts(response.data)
            setLoading("")

            
        } catch (error) {
            setLoading("")
            setError(error.message)  
        }
    };

    const handleSearch =(value) =>{
        const filtered = products.filter((product)=> 
        product.product_name.toLowerCase().includes(value.toLowerCase())
        ); //converts into lowercase

        setFilteredProducts(filtered);
    }
    
    useEffect(()=>{
        getProducts()
    },[]);

    return ( 
        <div className="row">
                {/* navbar mount component*/}
                <Navbar/>
                <Carousel/>
            
                
                    <div className="col-md-12 row justify-content-center text-center  ">
                        <h3 className="intro">Welcome to kahawa house</h3>

                    </div>
                    <b className="text-danger">{error}</b>
                    <b className="text-waring">{loading}</b>
                    <div className="row justify-content-center my-4">
                        <div className="co-md-4">
                            <input type="text" className="form-contol" placeholder="search product by name"
                             onChange={(e)=>handleSearch(e.target.value)}/>
                        </div>
                    </div>
            {/*looping through the product using .map()*/}
            {filteredProducts.map((product)=>(
                <div className="col-md-3 justify-content-center mb-4">
                    <div className="card shadow card-margin">
                            <img src={img_url +product.product_photo} alt="" className="product_img" />
                        <div className="card-body ">
                            <h5 className="mt-2 ">{product.product_name}</h5>
                            <p className="text-muted">{product.product_desc}</p>
                            <b className="text-warning">{product.product_cost}KES</b> <br />
                            <button className="btn btn-dark mt-2 w-100" onClick={()=>navigate("/Product",{state:{product}})}>Buy Now</button>

                        </div>
                    </div>
                </div>
            ))}
        
            {/* footbar */} 
            <Footer/>
        </div> 
          
     );
}
 
export default GetProduct;